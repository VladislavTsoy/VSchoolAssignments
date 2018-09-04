import { createStore } from 'redux'

const state = {
    postsArr: [{
        title: 'beets',
        description: 'bears, beets, battlestar galactica',
        imgUrl: 'https://images.unsplash.com/photo-1506807803488-8eafc15316c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ec2f5ff090dfefca144907ba96e18e6&auto=format&fit=crop&w=900&q=60',
        commentsArr: ['korean jim', "schrute's famous beets"]
    },
    {
        title: 'nyc',
        description: 'welcome to the concrete jungle',
        imgUrl: 'https://images.unsplash.com/photo-1511914340036-9eafebe977f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0573d688f694c2851412ed020d69c5d&auto=format&fit=crop&w=900&q=60',
        commentsArr: ['lower east side', 'west side right on time']
    },
    {
        title: 'threat level: midnight',
        description: 'starring michael scott',
        imgUrl: 'https://images.unsplash.com/photo-1533219057257-4bb9ed5d2cc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee688a7368c99053fc900629419c0949&auto=format&fit=crop&w=900&q=60',
        commentsArr: []
    }]
}

export const newPost = post => {
    return {
        type: "NEW_POST",
        post
    }
}

export const editPost = post => {
    return {
        type: "EDIT_POST",
        post
    }
}

export const deletePost = post => {
    return {
        type: "DELETE_POST",
        post
    }
}

export const addComment = post => {
    return {
        type: "NEW_COMMENT",
        post
    }
}

export const deleteComment = post => {
    return {
        type: "DELETE_COMMENT",
        post
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type){
        case "NEW_POST": 
            return {
                postsArr: [...prevState.postsArr, action.post]
            }
        case "EDIT_POST":
            let oldUrl = action.post.oldUrl
            let newArr = prevState.postsArr.map(item => {
                
                if(item.imgUrl === oldUrl) {
                    item.title = action.post.title,
                    item.description = action.post.description,
                    item.imgUrl = action.post.imgUrl
                }
                return item;
            })

            return {
                postsArr: [...newArr]
            }
        case "DELETE_POST":
            return {
                postsArr: prevState.postsArr.filter(item => item.imgUrl !== action.post.imgUrl)
            }
        case "NEW_COMMENT":
            
            let findUrl = action.post.imgUrl
            newArr = prevState.postsArr.map(item => {
                if(item.imgUrl === findUrl) {
                    item.commentsArr.push(action.post.comment)
                }
                return item;
            })
            return {
                postsArr: [...newArr]
            }

        case "DELETE_COMMENT":
            findUrl = action.post.imgUrl
            newArr = prevState.postsArr.map(item => {
                if(item.imgUrl === findUrl) {
                   let temp = item.commentsArr.filter(el => el !== action.post.comment)
                   item.commentsArr = temp
                }
                return item;
            })
            return {
                postsArr: [...newArr]
            }

        default:
            return prevState
    }
}
 
export default createStore(reducer)