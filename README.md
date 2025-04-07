# Freelancer Profile & Project Bidding Dashboard

A React TypeScript application that allows freelancers to view and bid on projects, and clients to view freelancer profiles and ratings.

## Features

- **Freelancer Profile**
  - Display profile details (name, skills, experience, portfolio links)
  - Show completed projects
  - Star rating system (1-5 stars) with ratings saved in localStorage

- **Project Bidding Dashboard**
  - View available projects with details (name, budget, timeline, required skills)
  - Place bids on projects with customized amounts, timelines, and proposals
  - Track bid status (Accepted, Pending, or Rejected)

- **Additional Features**
  - Dark/Light mode toggle with localStorage persistence
  - Responsive design for all device sizes
  - Filters for projects by name and skills

## Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **localStorage** for data persistence

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/freelancer-dashboard.git
   cd freelancer-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. The application will be available at `http://localhost:3000`

## Project Structure

```
/freelancer-dashboard
  /public
    /data
      projects.json
  /src
    /components
      /common
        DarkModeToggle.tsx
        Navbar.tsx
        Footer.tsx
        StarRating.tsx
      /freelancer
        FreelancerProfile.tsx
        CompletedProjects.tsx
        SkillBadge.tsx
      /projects
        ProjectCard.tsx
        ProjectsList.tsx
        BidForm.tsx
        BidStatus.tsx
    /contexts
      DarkModeContext.tsx
    /hooks
      useLocalStorage.ts
    /types
      index.ts
    /pages
      Dashboard.tsx
      Profile.tsx
    App.tsx
    index.tsx
    global.css
```

## Deployment

The project is deployed on Vercel and can be accessed at: [https://freelancer-dashboard.vercel.app](https://freelancer-dashboard.vercel.app)

## Future Enhancements

- Authentication system for freelancers and clients
- Real-time notifications for bid status changes
- Messaging system between freelancers and clients
- Advanced search and filtering options
- Integration with payment gateways

## License

MIT

## Author

Gopi Kant