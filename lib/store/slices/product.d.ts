import { ProductSlice } from "../../types/product";
import { BulkDiscountOffers, FollowerCount, FollowListing, Product, ProductCompareDetails, ProductSellers, ProductSizePrice, QueryProductPriceArgs } from "../../types/graphql";
export declare const pdpReducer: import("redux").Reducer<ProductSlice, import("redux").AnyAction>;
export declare const setProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<Product, "product/setProduct">, setfollowerCount: import("@reduxjs/toolkit").ActionCreatorWithPayload<FollowerCount, "product/setfollowerCount">, setproductSellers: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductSellers, "product/setproductSellers">, setproductPrice: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductSizePrice & QueryProductPriceArgs, "product/setproductPrice">, setcompareWithFrequentlyCompared: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "product/setcompareWithFrequentlyCompared">, setProductVariants: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "product/setProductVariants">, setbulkDiscountOffers: import("@reduxjs/toolkit").ActionCreatorWithPayload<BulkDiscountOffers, "product/setbulkDiscountOffers">, setFollowListing: import("@reduxjs/toolkit").ActionCreatorWithPayload<FollowListing, "product/setFollowListing">, setcompareSimilarProduct: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductCompareDetails, "product/setcompareSimilarProduct">, setfollowedProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "product/setfollowedProducts">;
