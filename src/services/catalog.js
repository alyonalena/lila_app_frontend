import { useSelector } from 'react-redux'
import { 
	selectAllWines, 
	selectProducers, 
	selectUpcomingEvents, 
	selectPastEvents 
} from '../store/dataSlice'

export function useAllWines() {
	return useSelector(selectAllWines)
}

export function useProducers() {
	return useSelector(selectProducers)
}

export function useUpcomingEvents() {
	return useSelector(selectUpcomingEvents)
}

export function usePastEvents() {
	return useSelector(selectPastEvents)
} 