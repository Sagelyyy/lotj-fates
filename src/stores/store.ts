import {defineStore} from 'pinia'

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [] as IPost[]
    }),
    actions: {
        addPost(post) {
            this.posts.push(post)
        }
    }
})

interface IPost {
    id: number
    title: string
    content: string
    created_at: string
    roll: number
    status: string
    character: string
}