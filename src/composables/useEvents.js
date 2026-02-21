import { ref } from 'vue'
import { events } from '@/data/events'

export function useEvents() {
  const allEvents = ref(events)

  const getEventById = (id) =>
    allEvents.value.find(e => e.id === Number(id))

  const getActiveEvents = () =>
    allEvents.value.filter(e => e.status === 'active')

  return { allEvents, getEventById, getActiveEvents }
}
