# .StoreApi

All URIs are relative to */v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**getInventory**](StoreApi.md#getInventory) | **GET** /store/inventory | Returns pet inventories by status
[**getOrderById**](StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
[**placeOrder**](StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet


# **deleteOrder**
> deleteOrder()

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example


```typescript
import { createConfiguration, StoreApi } from '';
import type { StoreApiDeleteOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StoreApi(configuration);

const request: StoreApiDeleteOrderRequest = {
    // ID of the order that needs to be deleted
  orderId: 1,
};

const data = await apiInstance.deleteOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**number**] | ID of the order that needs to be deleted | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Invalid ID supplied |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInventory**
> { [key: string]: number; } getInventory()

Returns a map of status codes to quantities

### Example


```typescript
import { createConfiguration, StoreApi } from '';

const configuration = createConfiguration();
const apiInstance = new StoreApi(configuration);

const request = {};

const data = await apiInstance.getInventory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: number; }**

### Authorization

[api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrderById**
> Order getOrderById()

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

### Example


```typescript
import { createConfiguration, StoreApi } from '';
import type { StoreApiGetOrderByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StoreApi(configuration);

const request: StoreApiGetOrderByIdRequest = {
    // ID of order that needs to be fetched
  orderId: 1,
};

const data = await apiInstance.getOrderById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**number**] | ID of order that needs to be fetched | defaults to undefined


### Return type

**Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **placeOrder**
> Order placeOrder()

Place a new order in the store

### Example


```typescript
import { createConfiguration, StoreApi } from '';
import type { StoreApiPlaceOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StoreApi(configuration);

const request: StoreApiPlaceOrderRequest = {
  
  order: {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: new Date('1970-01-01T00:00:00.00Z'),
    status: "approved",
    complete: true,
  },
};

const data = await apiInstance.placeOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **Order**|  |


### Return type

**Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


