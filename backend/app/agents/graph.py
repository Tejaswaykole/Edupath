from langgraph.graph import StateGraph, END
from app.agents.state import AgentState
from app.agents.nodes import observe, analyze_and_detect, decide, validate, act, persist

def build_agent_graph() -> StateGraph:
    workflow = StateGraph(AgentState)
    
    # We define nodes but since the graph runner expects nodes to take a dict (state)
    # and return a dict (state updates), we need wrapper functions that inject the DB session.
    # The actual execution happens via `evaluate_learner()` in the service layer where the session is passed.
    
    # Actually, a common pattern in LangGraph when needing external dependencies like a DB session
    # is to put them in a configured closure or RunnableConfig. For simplicity, we assume
    # `state["db_session"]` contains the active Session.
    
    def observe_wrapper(state: AgentState):
        return observe(state, state["db_session"])
        
    def analyze_wrapper(state: AgentState):
        return analyze_and_detect(state, state["db_session"])
        
    def decide_wrapper(state: AgentState):
        return decide(state, state["db_session"])
        
    def validate_wrapper(state: AgentState):
        return validate(state, state["db_session"])
        
    def act_wrapper(state: AgentState):
        return act(state, state["db_session"])
        
    def persist_wrapper(state: AgentState):
        return persist(state, state["db_session"])
    
    workflow.add_node("observe", observe_wrapper)
    workflow.add_node("analyze_and_detect", analyze_wrapper)
    workflow.add_node("decide", decide_wrapper)
    workflow.add_node("validate", validate_wrapper)
    workflow.add_node("act", act_wrapper)
    workflow.add_node("persist", persist_wrapper)
    
    workflow.set_entry_point("observe")
    workflow.add_edge("observe", "analyze_and_detect")
    workflow.add_edge("analyze_and_detect", "decide")
    workflow.add_edge("decide", "validate")
    workflow.add_edge("validate", "act")
    workflow.add_edge("act", "persist")
    workflow.add_edge("persist", END)
    
    return workflow.compile()

# Global graph instance
agent_graph = build_agent_graph()
