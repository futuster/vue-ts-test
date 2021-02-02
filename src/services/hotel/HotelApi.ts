import IPagination from "@/services/common/IPagination";

import {
    IHotel,
    IHotelList, IHotelReserveRequestParams
} from "./models";

import ApiInstance from './BaseApi'

const HOTEL_LIST_PATH = '/hotels.json';
const HOTEL_PATH = '/hotel.json';

export const GetHotelList = async (
    params: IPagination
): Promise<IHotelList> => {
    const res = await ApiInstance.get(`${HOTEL_LIST_PATH}`, {
        params
    });

    // TODO в апи могут не вернуться какие-то поля, тут нужно замапить ответ сервера на модель
    return res?.data as IHotelList;
};

export const GetHotel = async (uid: string): Promise<IHotel> => {
    const res = await ApiInstance.get(`${HOTEL_PATH}?uid=${uid}`);

    return res?.data as IHotel;
}

export const ReserveHotel = async (reservation: IHotelReserveRequestParams): Promise<IHotel> => {
    // пост-запрос мокать не хочется
    // const res = await ApiInstance.post(`${HOTEL_RESERVATION_PATH}`, reservation);
    const res = await ApiInstance.get(`${HOTEL_PATH}`);

    return res?.data as IHotel;
}
