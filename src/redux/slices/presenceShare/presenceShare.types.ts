export const PRESENCESHARE_REQUEST = 'PRESENCESHARE_REQUEST';
export const PRESENCESHARE_SUCCESS = 'PRESENCESHARE_SUCCESS';
export const PRESENCESHARE_FAILURE = 'PRESENCESHARE_FAILURE';

export interface PresenceShare {
	name: string;
	presenceShare: number;
}

export interface PresenceShareState {
	loading: boolean;
	presenceShare: PresenceShare[];
	error: string;
}
