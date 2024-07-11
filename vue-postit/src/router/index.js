import { createRouter, createWebHistory } from 'vue-router'
import NotesListView from '../views/NotesListView.vue'
import DetailsNoteView from '@/views/DetailsNoteView.vue'
import CreateNoteView from '@/views/CreateNoteView.vue'
import EditeNoteView from '@/views/EditeNoteView.vue'
import DeleteNoteView from '@/views/DeleteNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Notes_List',
      component: NotesListView
    },
    {
      path: '/detail/:id',
      name: 'detail',
     component : DetailsNoteView
    },
    {
      path: '/CreateNote',
      name: 'Create_Note',
     component : CreateNoteView
    },
    {
      path: '/EditNote/:id',
      name: 'Edit',
     component : EditeNoteView
    } ,{
      path: '/DeleteNote/:id',
      name: 'Delete',
     component : DeleteNoteView
    }
  ]
})

export default router
