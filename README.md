# Dev Cafe - A Blog Website for Tech Enthusiasts

## Description
Dev Cafe is a React-based blog site designed for tech enthusiasts to explore development-related articles. Users can bookmark interesting blogs for later reading and mark them as read, which automatically removes them from their bookmarks. The platform integrates with a custom `blog.json` API for seamless content management and updates.

## Key Features
- **Dynamic Blog Feed**: Browse through a collection of tech-focused blog posts with author details, reading time, and hashtags.
- **Bookmark Management**: Users can save interesting articles with a single click using the bookmark icon.
- **Reading Progress**: Track reading progress with a "Mark as read" feature that automatically removes completed articles from bookmarks.
- **Real-time Bookmark Counter**: Visual counter displays the current number of bookmarked articles.
- **Responsive Layout**: Fully responsive design with Tailwind CSS ensuring optimal viewing on all devices.

## React Features Used
- **useState Hook**: Implemented for managing bookmark state and reading progress.
- **useEffect Hook**: Used for fetching blog data from the custom API.
- **Props & PropTypes**: Strict prop validation for component data handling.
- **Component Architecture**: Modular design with reusable components (`Blog`, `Blogs`, `Bookmark`, `Bookmarks`).
- **Event Handlers**: Custom handlers for bookmark and reading time functionality.

## Live Link
[Experience Dev Cafe Live](https://techdevcafe.netlify.app/)

## Technologies Used
- React.js
- Tailwind CSS
- React Icons
- Prop Types
- Custom JSON API

## Project Structure

src/
├── components/
│   ├── Blog.jsx        # Individual blog post display
│   ├── Blogs.jsx       # Blog posts container
│   ├── Bookmark.jsx    # Single bookmark item
│   ├── Bookmarks.jsx   # Bookmarks container
│   └── Header.jsx      # Site header with profile
└── assets/
    └── images/         # Project images

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/dev-cafe.git
```

## Install dependencies

```bash
cd dev-cafe
npm install
```

## Start the development server

```bash Copy
npm run dev
```
## Contributing
***Contributions are welcome! Feel free to submit issues and pull requests.***

## Live Link
[View the deployed Dev Cafe website here](https://techdevcafe.netlify.app/)