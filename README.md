# bookmarking-app

### Installation
`yarn install` to install dependencies.

### Usage
`yarn start` to start the development server.

## API functionalities

#### BOOKMARKING

1. CREATE BOOKMARK
  
    **endpoint:** /api/bookmarks/
    
    **method:** post
    
    **request-body**:
    + link (string, required, unique)
    + title (string, required, unique)
    + publisher (string)
    + tagId (string)

    
2. DELETE BOOKMARK
  
    **endpoint:** /api/bookmarks/:id
    
    **method:** delete
    
    **request-params**:
    + id (string)
    
- - -

#### TAG

1. CREATE TAG
  
    **endpoint:** /api/tags/
    
    **method:** post
    
    **request-body**:
    + title (string, required, unique)

    
2. DELETE TAG
  
    **endpoint:** /api/tags/:id
    
    **method:** delete
    
    **request-params**:
    + id (string)
    
3. ADD TAG TO A BOOKMARK

    **endpoint:** /api/bookmarks/addtag
    
    **method:** put
    
    **request-body**:
    + bookmarkId (string, required)
    + tagId (string, required)

4. REMOVE A TAG FROM A CERTAIN BOOKMARK

    **endpoint:** /api/bookmarks/removetag/:id
    
    **method:** put
    
    **request-params**:
    + bookmarkId: id (string, required)

- - -

#### DISPLAY

1. RETREIVE ALL BOOKMARKS
  
    **endpoint:** /api/bookmarks/
    
    **method:** get

    
2. RETREIVE ALL TAGS
  
    **endpoint:** /api/bookmarks/:id
    
    **method:** get

