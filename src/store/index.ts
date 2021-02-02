import Vue from 'vue'
import Vuex, {ActionTree, GetterTree, MutationTree} from 'vuex'
import {IHotel, IHotelList, IHotelReserveRequestParams} from '@/services/hotel/models';
import IPagination from "@/services/common/IPagination"
import {GetHotel, GetHotelList, ReserveHotel} from "@/services/hotel/HotelApi";

Vue.use(Vuex)

class State {
    hotels: Array<IHotel>;

    hotel: IHotel;

    constructor() {
        this.hotels = [];
        this.hotel = {
            uid: '',
            title: '',
            description: '',
            location: '',
            price: 0,
        };
    }
}

const getters = <GetterTree<State, any>>{};

const mutations = <MutationTree<State>>{

    setHotels(state, payload) {
        state.hotels = payload;
    },

    setHotel(state, payload) {
        state.hotel = payload;
    }

};

const actions = <ActionTree<State, any>>{

    async fetchHotelList(context) {
        const pagination: IPagination = {
            limit: 20,
            offset: 0
        };

        const hotelList: IHotelList = await GetHotelList({...pagination});

        context.commit('setHotels', hotelList.hotels)

    },

    async fetchHotel(context, uid: string) {
        const hotel: IHotel = await GetHotel(uid);

        context.commit('setHotel', hotel);
    },

    async hotelReserve(context, payload: IHotelReserveRequestParams) {
        const res: IHotel = await ReserveHotel(payload);
    }

};

export default new Vuex.Store({
    state: new State(),
    mutations: mutations,
    actions: actions,
    modules: {}
})













