# Bookshelf API

Create basic API using Hapi framework.

## POST /books

Body request:

```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

Response body:

```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "1L7ZtDUFeGs7VlEt"
  }
}
```

## GET /books

Menampilkan seluruh buku, jika terdapat data buku maka response body seperti ini:

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "1L7ZtDUFeGs7VlEt",
        "name": "Buku B",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "K8DZbfI-t3LrY7lD",
        "name": "Buku C",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

Jika tidak ada data buku, maka response body seperti ini:

```json
{
  "status": "success",
  "data": {
    "books": []
  }
}
```

## GET /books?name={name}

Mendapatkan buku berdasarkan query params {name} secara non-case sensitive (tidak peduli huruf kapital atau tidak). Contoh response body:

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

## GET /books?reading={reading}

Mendapatkan buku berdasarkan query params {reading}. Jika bernilai 1 akan mengembalikan buku dengan atribute `reading=true`, jika bernilai 0 akan mengembalikan buku dengan atribute `reading=false`.

## GET /books?finished={finished}

Mendapatkan buku berdasarkan query params {finished}. Jika bernilai 1 akan mengembalikan buku dengan atribute `finished=true`, jika bernilai 0 akan mengembalikan buku dengan atribute `finished=false`.

## GET /books/{bookId}

Menampilkan detail buku berdasarkan id. Jika id ditemukan response body seperti ini:

```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "aWZBUW3JN_VBE-9I",
      "name": "Buku A Revisi",
      "year": 2011,
      "author": "Jane Doe",
      "summary": "Lorem Dolor sit Amet",
      "publisher": "Dicoding",
      "pageCount": 200,
      "readPage": 26,
      "finished": false,
      "reading": false,
      "insertedAt": "2021-03-05T06:14:28.930Z",
      "updatedAt": "2021-03-05T06:14:30.718Z"
    }
  }
}
```

Jika id tidak ditemukan, maka response body seperti ini:

```json
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

## PUT /books/{bookId}

Dapat mengubah data buku berdasarkan id dengan body request:

```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

## DELETE /books/{bookId}

Dapat menghapus buku berdasarkan id dengan response:

```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```
