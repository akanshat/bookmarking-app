# bookmarking-app

### Installation
`yarn install` to install dependencies.

### Usage
`yarn start` to start the development server.

## API functionalities

#### Bookmarking

1. Create Bookmark
  
    **endpoint:** /api/bookmarks/
    
    **method:** post
    
    **request-body**:
    + link (string, required, unique)
    + title (string, required, unique)
    + publisher (string)
    + tagId (string)

    
2. Delete Bookmark
  
    **endpoint:** /api/bookmarks/:id
    
    **method:** delete
    
    **request-params**:
    + id (string)
    
- - -

#### Tag

1. Create Tag
  
    **endpoint:** /api/tags/
    
    **method:** post
    
    **request-body**:
    + title (string, required, unique)

    
2. Delete Tag
  
    **endpoint:** /api/tags/:id
    
    **method:** delete
    
    **request-params**:
    + id (string)
    
3. Add Tag to a Bookmark

    **endpoint:** /api/bookmarks/addtag
    
    **method:** put
    
    **request-body**:
    + bookmarkId (string, required)
    + tagId (string, required)

4. Remove a Tag from a certain Bookmark

    **endpoint:** /api/bookmarks/removetag/:id
    
    **method:** put
    
    **request-params**:
    + bookmarkId: id (string, required)

- - -

#### Display

1. Retrieve all Bookmarks
  
    **endpoint:** /api/bookmarks/
    
    **method:** get

    
2. Retrieve all tags
  
    **endpoint:** /api/bookmarks/:id
    
    **method:** get

