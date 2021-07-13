import Api from '../../api';

export const setSelectedNode = (node) => ({
    type: 'SELECT_NODE',
    payload: node
});

export const fetchRootNode = () => (dispatch) => {
    Api.getRootNode()
        .then(res => {
            dispatch(addNode(res));
        });
};

export const fetchChildNodes = (parentId) => (dispatch) => {
    Api.getChildren(parentId)
        .then(res => {
            res.forEach(item => dispatch(addNode(item)));
        });
}

export const fetchRemoveNode = (nodeId) => (dispatch) => {
    Api.removeNode(nodeId)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch(removeNode(nodeId))
            }
        });
};

export const updateNode = (node) => ({
   type: 'UPDATE_NODE',
   payload: node
});

export const addNode = (node) => ({
    type: 'ADD_NODE',
    payload: node
});

export const removeNode = (nodeId) => ({
   type: 'REMOVE_NODE',
    payload: {nodeId}
});