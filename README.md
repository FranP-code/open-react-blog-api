# ORB - (Open React Blog) API

Little API for access to Open React Blog's data.

Base URL: [https://open-react-blog-api.up.railway.app](https://open-react-blog-api.up.railway.app)

## Available endpoints

- `/user` - Get determinated user data
    
    Details:
    - **POST Request**
    - Request's Body:
        ```json
        {
            "user": "example" //!REQUIRED
        }
        ```
    - Returned Data:
        ```json
        {
            "username": {
                "username": "john-doe",
                "displayUsername": "John Doe"
            },
            "posts": [
                {
                    "id": "id",
                    "readingTime": "1 min.",
                    "title": "Lorem Ipsum",
                    "date": {
                        "seconds": 1651334551
                    },
                    "post": "Full post",
                    "shortPost": "Full p..."
                }
            ]
        }
        ```

## Acknowledgments

**Fonts**
- [Poppins](https://fonts.google.com/specimen/Poppins)
- [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro)

**Libraries**
- [highlight.js](https://highlightjs.org/)

### Additional
Has been an SDK Keys Leak. Solved.
