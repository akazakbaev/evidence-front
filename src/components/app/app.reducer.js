

const initialState = {
    breadcrumb: {
        title: null,
        description: null,
        links: [],
        show: false
    },
}


export function core(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        default:
            return state
    }
}

