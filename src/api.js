export default class Api {
    static async getRootNode() {
        const res = await fetch('/api/v1/nodes');
        return await res.json();
    }

    static async getChildren(parentId) {
        const res = await fetch(`/api/v1/nodes/${parentId}/children`);
        return await res.json();
    }

    static async removeNode(nodeId) {
        const res = await fetch(`/api/v1/nodes/${nodeId}`, {
            method: 'DELETE',
        });

        return res.status === 200;
    }

    static async updateNode(node) {
        const res = await fetch(`/api/v1/nodes/${node.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(node)
        });

        return res.status === 200;
    }

    static async createNode(node) {
        const res = await fetch('/api/v1/nodes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(node)
        });

        if (res.status === 200) {
            return await res.json();
        } else {
            return null;
        }
    }
}