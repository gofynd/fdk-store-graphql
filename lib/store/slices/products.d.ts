import { ProductsSlice } from "../../types/products";
import { ProductConnection } from "../../types/graphql";
export declare const fetchProducts: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchSuggestions: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductSuggestions: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchProductListingMeta: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCategoryListingMeta: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchBrandListingMeta: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchCollectionListingMeta: import("@reduxjs/toolkit").AsyncThunk<any, any, {
    extra: {};
    rejectValue: import("@reduxjs/toolkit").SerializedError;
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const plpReducer: import("redux").Reducer<ProductsSlice, import("redux").AnyAction>;
export declare const resetProductListingMeta: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"products/resetProductListingMeta">, setProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductConnection, "products/setProducts">;
