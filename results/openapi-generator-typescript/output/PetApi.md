# .PetApi

All URIs are relative to */v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](PetApi.md#addPet) | **POST** /pet | Add a new pet to the store
[**deletePet**](PetApi.md#deletePet) | **DELETE** /pet/{petId} | Deletes a pet
[**findPetsByStatus**](PetApi.md#findPetsByStatus) | **GET** /pet/findByStatus | Finds Pets by status
[**findPetsByTags**](PetApi.md#findPetsByTags) | **GET** /pet/findByTags | Finds Pets by tags
[**getPetById**](PetApi.md#getPetById) | **GET** /pet/{petId} | Find pet by ID
[**updatePet**](PetApi.md#updatePet) | **PUT** /pet | Update an existing pet
[**updatePetWithForm**](PetApi.md#updatePetWithForm) | **POST** /pet/{petId} | Updates a pet in the store with form data
[**uploadFile**](PetApi.md#uploadFile) | **POST** /pet/{petId}/uploadImage | uploads an image


# **addPet**
> Pet addPet(pet)

Add a new pet to the store

### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiAddPetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiAddPetRequest = {
    // Create a new pet in the store
  pet: {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "photoUrls_example",
    ],
    tags: [
      {
        id: 1,
        name: "name_example",
      },
    ],
    status: "available",
    _public: true,
  },
};

const data = await apiInstance.addPet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | **Pet**| Create a new pet in the store |


### Return type

**Pet**

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePet**
> deletePet()



### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiDeletePetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiDeletePetRequest = {
    // Pet id to delete
  petId: 1,
    //  (optional)
  apiKey: "api_key_example",
};

const data = await apiInstance.deletePet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | Pet id to delete | defaults to undefined
 **apiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Invalid pet value |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findPetsByStatus**
> Array<Pet> findPetsByStatus()

Multiple status values can be provided with comma separated strings

### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiFindPetsByStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiFindPetsByStatusRequest = {
    // Status values that need to be considered for filter (optional)
  status: "available",
};

const data = await apiInstance.findPetsByStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**&#39;available&#39; | &#39;pending&#39; | &#39;sold&#39;**]**Array<&#39;available&#39; &#124; &#39;pending&#39; &#124; &#39;sold&#39;>** | Status values that need to be considered for filter | (optional) defaults to 'available'


### Return type

**Array<Pet>**

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid status value |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findPetsByTags**
> Array<Pet> findPetsByTags()

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiFindPetsByTagsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiFindPetsByTagsRequest = {
    // Tags to filter by (optional)
  tags: [
    "tags_example",
  ],
};

const data = await apiInstance.findPetsByTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **Array&lt;string&gt;** | Tags to filter by | (optional) defaults to undefined


### Return type

**Array<Pet>**

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid tag value |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPetById**
> Pet getPetById()

Returns a single pet

### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiGetPetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiGetPetByIdRequest = {
    // ID of pet to return
  petId: 1,
};

const data = await apiInstance.getPetById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | ID of pet to return | defaults to undefined


### Return type

**Pet**

### Authorization

[petstore_auth](README.md#petstore_auth), [api_key](README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Pet not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePet**
> Pet updatePet(pet)

Update an existing pet by Id

### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiUpdatePetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiUpdatePetRequest = {
    // Update an existent pet in the store
  pet: {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "photoUrls_example",
    ],
    tags: [
      {
        id: 1,
        name: "name_example",
      },
    ],
    status: "available",
    _public: true,
  },
};

const data = await apiInstance.updatePet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | **Pet**| Update an existent pet in the store |


### Return type

**Pet**

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Pet not found |  -  |
**405** | Validation exception |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePetWithForm**
> updatePetWithForm()



### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiUpdatePetWithFormRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiUpdatePetWithFormRequest = {
    // ID of pet that needs to be updated
  petId: 1,
    // Name of pet that needs to be updated (optional)
  name: "name_example",
    // Status of pet that needs to be updated (optional)
  status: "status_example",
};

const data = await apiInstance.updatePetWithForm(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | ID of pet that needs to be updated | defaults to undefined
 **name** | [**string**] | Name of pet that needs to be updated | (optional) defaults to undefined
 **status** | [**string**] | Status of pet that needs to be updated | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFile**
> ApiResponse uploadFile()



### Example


```typescript
import { createConfiguration, PetApi } from '';
import type { PetApiUploadFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiUploadFileRequest = {
    // ID of pet to update
  petId: 1,
    // Additional Metadata (optional)
  additionalMetadata: "additionalMetadata_example",
  
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.uploadFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **petId** | [**number**] | ID of pet to update | defaults to undefined
 **additionalMetadata** | [**string**] | Additional Metadata | (optional) defaults to undefined


### Return type

**ApiResponse**

### Authorization

[petstore_auth](README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


