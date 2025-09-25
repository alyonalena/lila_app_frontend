import { createSlice } from '@reduxjs/toolkit'

import { allWines, producers, upcomingEvents, pastEvents } from '../data'

const initialState = {
	allWines,
	producers,
	upcomingEvents,
	pastEvents,
}

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		// Placeholder for future mutations
	}
})

export const selectAllWines = state => state.data.allWines
export const selectProducers = state => state.data.producers
export const selectUpcomingEvents = state => state.data.upcomingEvents
export const selectPastEvents = state => state.data.pastEvents

export default dataSlice.reducer 