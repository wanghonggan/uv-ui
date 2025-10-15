export default {
    // 注意：默认值都要用default声明
    popup: {
        mode: {
            type: String,
            default: 'bottom',
        },
        round: {
            type: [Number, String],
            default: 12,
        },
    },
    overlay: {
        zIndex: {
            type: [String, Number],
            default: 300,
        },
    },
    textarea: {
        maxlength: {
            type: [String, Number],
            default: -1
        },
    },
    search:{
        bgColor: {
            default: '#f8f8f8',
        },
    },
    gap: {
        bgColor: {
            default: '#f8f8f8',
        },
        height: {
            default: 10,
        },
    },
    empty: {
        //  图标宽度，单位px
        width: {
            type: [String, Number],
            default: 110
        },
        // 图标高度，单位px
        height: {
            type: [String, Number],
            default: 110
        },
    },
    modal:{
        width: {
            type: [String, Number],
            default: '70vw'
        },
    }
}