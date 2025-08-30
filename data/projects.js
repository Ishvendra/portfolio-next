import Bullet from '../components/Bullet';
import ReactNativeIcon from '../public/assets/icons/react-native.png';
import MuiIcon from '../public/assets/icons/mui.png';
import NextJsIcon from '../public/assets/icons/next.png';
import ReactQueryIcon from '../public/assets/icons/react-query.png';
import NodeJsIcon from '../public/assets/icons/node.png';
import NestJsIcon from '../public/assets/icons/nest.png';
import TypeScriptIcon from '../public/assets/icons/ts.png';
import MongoIcon from '../public/assets/icons/mongo.png';
import RealmIcon from '../public/assets/icons/realm.png';
import FirebaseIcon from '../public/assets/icons/firebase.png';
import JestIcon from '../public/assets/icons/jest.png';
import ContentStackIcon from '../public/assets/icons/contentstack.png';
import StorybookIcon from '../public/assets/icons/storybook.png';
// import JavaScriptIcon from '../public/assets/icons/js.png';
// import ReactIcon from '../public/assets/icons/react.png';
import styles from '../styles/project.module.css';
import clsx from 'clsx';

const projects = [
  {
    id: '01',
    title: 'KSH QMS: Quality & Compliance Tracker',
    date: 'Feb 2025',
    overview: (
      <>
        <main className={styles.color}>
          <section>
            <p>
              <span className='tooltip bold'>
                Quality Track
                <span className='tooltiptext'>
                  Original name has been changed to maintain confidentiality.
                </span>
              </span>{' '}
              is a tailor-made enterprise application developed for a leading
              Indian manufacturer of{' '}
              <strong className={styles.reveal}>
                Winding Wires and Conductors
              </strong>
              , operating in the{' '}
              <strong className={styles.reveal}>
                high-precision industrial sector.
              </strong>
            </p>
          </section>

          <section>
            <p>
              The system was designed to overhaul their
              <strong className='reveal wavy-yellow'>
                {' '}
                Quality Assurance workflows,{' '}
              </strong>
              replacing traditional manual and spreadsheet-based methods with a
              modern, digital-first platform. It centralizes and streamlines
              quality checks, alerts, inspections, certifications, and
              corrective actions,{' '}
              <strong className={styles.reveal}>
                significantly improving compliance in an{' '}
                <span className='bold highlight'>efficient manner.</span>
              </strong>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id='my-role'>
          <h2>My Role</h2>
          <p>
            I worked as a{' '}
            <strong className={styles.reveal}>Frontend Developer</strong> on
            this project and contributed to UI planning and integration.{' '}
            <strong className={styles.reveal}>
              My core responsibilities included:
            </strong>
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Developing key modules like NC Tracking, 8D Root Cause Analysis,
              Dashboard & MIS Reports, and the complete Settings Module.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Designing reusable components, modals, and layouts to maintain
              consistency across modules.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Building a custom Axios helper for managing API requests and error
              handling, integrated with React Query for data fetching and
              caching.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Implementing form workflows using react hook form and data tables
              using DataGrid.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Handling edge cases like API failure states, empty datasets, and
              conditional input validation.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Collaborating daily with the backend team to refine requirements
              and resolve integration issues.
            </li>
          </ul>
        </section>

        <section id='problem'>
          <h2>The Problem</h2>
          <p>
            The client relied on{' '}
            <span className={styles.reveal}>manual workflows</span> and{' '}
            <strong>spreadsheet-based tools</strong> to manage quality processes
            like inspections, test results, and compliance checks. This led to:
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              High risk of{' '}
              <strong className={styles.reveal}>manual errors</strong> and data
              loss
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              <span className={styles.reveal}>Slow decision-making</span> and
              scattered records
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              <strong className={styles.reveal}>
                Limited traceability
              </strong>{' '}
              and poor audit readiness
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Difficulty in maintaining{' '}
              <span className={styles.reveal}>compliance</span> across multiple
              stakeholders
            </li>
          </ul>
        </section>

        <section id='solution'>
          <h2>The Solution</h2>
          <p>
            We developed a custom enterprise-grade solution to digitize and
            centralize quality assurance operations.
          </p>
          <p>The application provides:</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Automatic fetching of Technical Data Sheets (TDS) for real-time
              inspection reference
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Integrated Inspection Sheet with auto-calculation of OK/Not OK
              status
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Instant generation of Test Certificates post inspection
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Workflow-driven creation of NCs and 8D Reports for corrective
              action
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Dashboards and role-based access to ensure compliance and data
              security
            </li>
          </ul>
        </section>

        <section id='my-work'>
          <h2>Modules I Developed</h2>
          <p>
            I was responsible for implementing several high-impact modules
            within the system:
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              NC Tracking: Real-time logging of non-conformities with
              validation, traceability, and review flow.
            </li>
            <div className='flexbox mb-20'>
              <img
                src='/assets/projects/quality-track/NC.png'
                width={'100%'}
                className='mt-4'
                alt='NC Flowchart'
              />
              <p className='underline mb-10'>
                Fig. 1 - NC flowchart illustration
              </p>
            </div>
            <li className={styles['list-item']}>
              <Bullet />
              8D Reports: Step-wise RCA forms with PDF export, role-based
              collaboration, and history tracking.
            </li>
            <div className='flexbox mb-20'>
              <img
                src='/assets/projects/quality-track/8D.png'
                width={'70%'}
                className='mt-4'
                alt='8D Flowchart'
              />
              <p className='underline mb-10'>Fig. 2 - 8D illustration</p>
            </div>
            <li className={styles['list-item']}>
              <Bullet />
              Dashboard & MIS: Real-time KPIs, tabular reports using DataGrid,
              exportable Excel & PDF files.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Settings Module: Developed interfaces for user roles, unit info,
              pricing charts, notifications, and more using reusable components
              and modal-based forms.
            </li>
          </ul>
        </section>

        <section id='impact'>
          <h2 className='color font-size-title'>Impact</h2>
          <p>The solution delivered measurable operational improvements:</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              95% reduction in manual errors during inspections.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              30% faster data entry and report generation.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              40% improvement in compliance tracking and audits.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Audit readiness enhanced with PDF/Excel exports and full
              traceability.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Overall 35% boost in operational efficiency across quality teams.
            </li>
          </ul>
        </section>
      </>
    ),
    images: [
      '/assets/projects/quality-track/1.png',
      '/assets/projects/quality-track/2.png',
      '/assets/projects/quality-track/3.png',
      '/assets/projects/quality-track/4.png',
      '/assets/projects/quality-track/5.png',
    ],
    techStack: [
      { src: NextJsIcon, alt: 'Next JS' },
      { src: ReactQueryIcon, alt: 'React Query' },
      { src: NestJsIcon, alt: 'Nest JS' },
      { src: TypeScriptIcon, alt: 'Type script' },
      { src: MongoIcon, alt: 'Mongo DB' },
    ],
  },
  {
    id: '02',
    title: 'Dynamic Diet',
    date: 'Sept 2024',
    overview: (
      <>
        <main className={styles['color']}>
          <section>
            <p>
              Dynamic Diet CRM is a{' '}
              <span className={clsx(styles['bold'], styles['reveal'])}>
                customized customer relationship management system
              </span>{' '}
              built for a growing diet consultancy organization handling over{' '}
              <span className='bold reveal'>1000+ active clients.</span> The
              platform streamlines core operations like client{' '}
              <span className='bold reveal'>
                tracking, order management, analytics, diet planning, and
                communication,
              </span>{' '}
              enabling the business to deliver personalized health and nutrition
              guidance at <span className='bold highlight'>scale.</span>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id='my-role'>
          <h2>My Role</h2>
          <p>
            <strong className={styles.reveal}>
              I led the end-to-end development of this project
            </strong>{' '}
            from initial requirement gathering and client communication to final
            delivery and post-launch maintenance.{' '}
            <strong className={styles.reveal}>
              I was the primary point of contact for all{' '}
            </strong>
            technical discussions, collaborating closely with stakeholders
            across different phases to shape the product vision into a working
            solution.
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              UI/UX design and frontend development
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Direct client interaction for feedback loops
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Feature planning, estimation, and prioritization
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Integrations and deployment
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Ongoing bug fixes and improvements
            </li>
          </ul>
        </section>

        <section id='problem'>
          <h2>The Problem</h2>
          <p>
            The consultancy was managing client information, orders, and
            follow-ups manually across spreadsheets and communication platforms.
            This led to:
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Inefficient tracking of client progress and consultations
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              <span className={styles.reveal}>Delayed communication</span> of
              diet plans and updates
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              No centralized system for viewing or analyzing client data
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Scattered workflows across nutritionists, order handlers, and
              administrators
            </li>
          </ul>
        </section>

        <section id='solution'>
          <h2>The Solution</h2>
          <p>We designed and developed a tailored CRM platform that:</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Centralized all client data in a secure, accessible system
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Automated order processing and diet plan distribution
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Enabled filtered views of clients by status, type, or assigned
              consultant
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Integrated email functionality to send rich HTML + PDF attachments
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Provided a scalable, modular structure to evolve with business
              needs
            </li>
          </ul>
        </section>

        <section id='my-work'>
          <h2>Modules I Developed</h2>
          <p>
            I contributed to and led development of multiple critical modules,
            including:
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Client Management: Add/edit client profiles, track status, assign
              consultants, search and filter across 1000+ entries
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Analytics Dashboard: Visual insights into orders, active clients,
              diet plan engagement
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              To-Do Module: Task tracking for nutritionists and admins
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              User Management: Admins could manage roles and access levels
            </li>
            {/*  */}
            <li className={styles['list-item']}>
              <Bullet />
              Orders Module: End-to-end order lifecycle with PDF and email
              support
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Questionnaire Module: Custom form responses for onboarding new
              clients
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Email Integration: Rich text email editor + automated PDF
              generation + attachments sent directly from the platform
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Calendly Integration: Easy consultation scheduling
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Special Notes & Recipes Module: Maintain client-specific insights
              and meal ideas
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Food Item Database: Master list of diet items for plan creation
            </li>
          </ul>
        </section>

        <section id='impact'>
          <h2 className='color font-size-title'>Impact</h2>
          <p>The solution delivered measurable operational improvements:</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              30% reduction in manual errors related to order/diet dispatch
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              3x faster diet plan delivery using automated email + PDF
              generation
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              ~40% improvement in operational efficiency across client handling
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Enhanced client satisfaction due to faster communication and
              better data handling
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Improved collaboration between consultants through centralized
              notes and to-dos
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Seamless scaling to over 1000 clients with smooth search/filter UX
            </li>
          </ul>
        </section>
      </>
    ),
    images: [
      '/assets/projects/quality-track/1.png',
      '/assets/projects/quality-track/2.png',
      '/assets/projects/quality-track/3.png',
      '/assets/projects/quality-track/4.png',
      '/assets/projects/quality-track/5.png',
    ],
    techStack: [
      { src: NextJsIcon, alt: 'Next JS' },
      { src: ReactQueryIcon, alt: 'React Query' },
      { src: TypeScriptIcon, alt: 'Type script' },
      { src: MongoIcon, alt: 'Mongo DB' },
      { src: MuiIcon, alt: 'Material UI' },
    ],
  },
  {
    id: '03',
    title: 'Tour Touch CRM',
    date: 'Apr 2024',
    overview: (
      <>
        <main className={styles.color}>
          <section>
            <p>
              Tour Touch CRM is a scalable{' '}
              <span className={styles.reveal}>
                SaaS platform designed for travel agencies
              </span>{' '}
              to streamline their end-to-end operations from managing enquiries,
              itinerary planning, hotel bookings, financial tracking and
              invoicing. Built on a{' '}
              <span className={styles.reveal}>multi-tenant architecture,</span>{' '}
              it allows each agency to manage its own data in isolation,
              supporting custom workflows, rich analytics and{' '}
              <span className='highlight'>modular expansion.</span>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id='my-role'>
          <h2>My Role</h2>
          <p>
            <strong className={styles.reveal}>
              I led the end-to-end development of this project
            </strong>{' '}
            , collaborating with 2 backend developers and 1 additional frontend
            developer. I was responsible for key modules, architectural
            decisions, library/tool adoption, code modularity, and later took
            over client communication and requirement analysis for subsequent
            phases.
          </p>
        </section>

        <section id='problem'>
          <h2>Key Features & Modules Developed</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Analytics Dashboard: Custom visualizations using ApexCharts and
              dynamic widgets.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              <span className={styles.reveal}>Enquiry Module: </span>Complex
              forms with React Hook Form, Yup validation, dynamic fields.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Todo Module: Task tracking specific to enquiries or clients.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Pax & Invoice Management: Generate and export invoices with PDF
              support.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              User & Role Management: Multi-user support with custom
              permissions.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Other Modules: Calendar, Packages, Itineraries,
              Inclusions/Exclusions, Reports, Assets, Organization Settings.
            </li>
          </ul>
        </section>

        <section id='solution'>
          <h2>Challenges & Solutions</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Form Complexity: Managed nested and conditionally rendered fields
              using react-hook-form.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Validation Structure: Centralized form schema definitions using
              Yup.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              API Handling: Built a reusable Axios wrapper for consistent API
              error/success handling, which became the default across all later
              projects.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Table Data Handling: Standardized data grids with MUI DataGrid and
              reusable filter/sort logic.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Auth Refactor: Improved the Auth Context for better session
              handling across the app.
            </li>
          </ul>
        </section>

        <section id='impact'>
          <h2 className='color font-size-title'>Impact</h2>
          <p>The solution delivered measurable operational improvements:</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Enabled multiple travel agencies to onboard and operate with
              isolated datasets.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Reduced form bugs and response errors by ~80% with modular
              form-validation-API system.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              The custom API utility and layout practices established a
              foundation reused across future projects.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Contributed to consistent design language by standardizing the use
              of MUI Kit and related libraries.
            </li>
          </ul>
        </section>

        <section id='ownership'>
          <h2 className='color font-size-title'>
            Client Communication & Ownership
          </h2>
          <p>
            Though initial requirement gathering was done by seniors, I
            eventually took over full client communication, starting from Phase
            1.1 and continuing into Phase 2. I handled clarification meetings,
            client demos, and ensured timely delivery. I also maintained and
            updated the project post-deployment.
          </p>
        </section>
      </>
    ),
    images: [
      '/assets/projects/travel-crm/1.png',
      '/assets/projects/travel-crm/2.png',
      '/assets/projects/travel-crm/3.png',
    ],
    techStack: [
      { src: NextJsIcon, alt: 'Next JS' },
      { src: NodeJsIcon, alt: 'Node JS' },
      { src: MuiIcon, alt: 'Material UI ' },
      { src: MongoIcon, alt: 'Mongo DB' },
      { src: TypeScriptIcon, alt: 'TypeScript' },
    ],
  },
  {
    id: '04',
    title: 'Shashvat Connect Mobile App',
    date: 'Jan 2024',
    overview: (
      <>
        <main className={styles.color}>
          <section>
            <p>
              <span className={styles.reveal}>Shashvat Mobile App</span> is a
              school communication and management platform built for parents,
              students, and staff to interact through features like chat,
              notifications, and profile management. Designed as a{' '}
              <span className={styles.reveal}>lightweight mobile solution</span>{' '}
              using React Native, it prioritizes smooth user experience and
              performance on lower-end devices.
            </p>
          </section>

          <section>
            <h2>Challenges in School Communication:</h2>
            <p className='mb-10'>
              Schools struggled with offline notices, fragmented communication,
              and lack of real-time updates. Shashvat Connect was designed to
              digitize school interactions, reduce paperwork, and improve
              student engagement.
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id='my-role'>
          <h2>My Role</h2>
          <p>
            I was part of the frontend team and contributed extensively to core
            functionality and UI/UX. I developed custom components, worked on
            chat systems, handled local data storage, and integrated frontend
            notification triggers.
          </p>
        </section>

        <section id='problem'>
          <h2>Key Features & Modules Developed</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Chat System: Built both private and group chat functionalities
              with real-time syncing and local persistence using Realm.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Custom Input Components: Created lightweight, reusable form
              components with built-in validation to avoid external form
              libraries.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              UI Design: Designed and implemented key screens like Profile Page,
              Chat Interface and Notifications UI.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Notification Triggering: Integrated frontend logic for push
              notifications via Firebase.
            </li>
          </ul>
        </section>

        <section id='solution'>
          <h2>Challenges & Solutions</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              App Size Constraints: To keep the app lightweight, I built custom
              animations and inputs instead of relying on heavy third-party
              libraries.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Local Persistence: Used Realm for seamless offline support and
              instant access to message history.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Cross-Platform UI Consistency: Crafted custom styles and layout
              logic to ensure the app looked polished on both Android and iOS.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Notifications Integration: Carefully handled permission prompts
              and message display logic tied with FCM.
            </li>
          </ul>
        </section>

        <section id='impact'>
          <h2 className='color font-size-title'>Impact</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Delivered a lightweight, performant app usable on a range of
              devices.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Enabled seamless communication between teachers, parents, and
              students.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Improved local data handling and app responsiveness using Realm.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Reduced app size and load time by relying on handcrafted
              components over external UI kits.
            </li>
          </ul>
        </section>

        <section id='ownership'>
          <h2 className='color font-size-title'>Collaboration & Ownership</h2>
          <p>
            While I collaborated closely with other frontend team members, I
            independently handled:
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Chat module end-to-end
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              UI/UX design for key screens
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Frontend logic for notifications:
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              My code became a reference for best practices in optimizing
              performance and modularity for future mobile projects in the
              company.
            </li>
          </ul>
        </section>
      </>
    ),
    images: [
      '/assets/projects/shashvat/1.png',
      '/assets/projects/shashvat/2.png',
      '/assets/projects/shashvat/3.png',
    ],
    techStack: [
      { src: RealmIcon, alt: 'Realm DB' },
      { src: FirebaseIcon, alt: 'Firebase' },
      { src: ReactNativeIcon, alt: 'React Native' },
      { src: TypeScriptIcon, alt: 'TypeScript' },
    ],
  },
  {
    id: '05',
    title: 'Nuskin',
    date: 'Oct 2023',
    overview: (
      <>
        <main className={styles.color}>
          <section>
            <p>
              <span className={styles.reveal}>Nuskin Website Revamp</span> was a
              modernization initiative where the legacy CMS-based platform was
              replaced by a fast, scalable frontend architecture using React and
              a{' '}
              <span className='reveal bold'>headless CMS (Contentstack).</span>{' '}
              The goal was to rebuild UI components from scratch, improve
              maintainability, and integrate with a microfrontend architecture
              to support multiple teams working in different frameworks.
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id='my-role'>
          <h2>My Role</h2>
          <p>
            I worked as a frontend developer under the mentorship of a senior
            developer. I was involved in rebuilding UI components based on Figma
            designs, writing reusable and testable code, and integrating both
            frontend components and headless CMS content. I also made meaningful
            contributions to complex validation logic and cross-framework
            microfrontend integration.
          </p>
        </section>

        <section id='problem'>
          <h2>Key Features & Work Areas</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Component Development: Built reusable UI components like cards,
              banners, buttons, etc., from Figma designs in both React and
              Storybook.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Component Testing: Wrote test cases for a range of shared
              components using Jest and React Testing Library.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              CMS Integration: Pulled dynamic content from Contentstack,
              integrating it into the UI via API calls.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Microfrontend Architecture: Worked on integrating modules
              developed in Vue.js into the main React application using
              microfrontend techniques.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Analytics Setup: Integrated Google Analytics to track CMS-driven
              content behavior.{' '}
            </li>
          </ul>
        </section>

        <section id='solution'>
          <h2>Challenges & Solutions</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Framework Interoperability: Learned and implemented microfrontend
              techniques to allow React and Vue components to coexist in the
              same project.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Complex Nested Object Validation: Successfully completed a deep
              object comparison and validation task involving large, deeply
              nested objects—something even senior developers found challenging.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Scalability of Components: Ensured components were modular, styled
              independently, and fully documented in Storybook for easy adoption
              by other teams.
            </li>
          </ul>
        </section>

        <section id='impact'>
          <h2 className='color font-size-title'>Impact</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Contributed to establishing a robust, scalable design system from
              scratch.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Improved developer efficiency through well-tested, reusable
              components.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Enabled CMS-driven dynamic content integration that allowed
              business users to manage and preview site content easily.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Ensured seamless tracking and user interaction analytics with GA
              integration.
            </li>
          </ul>
        </section>

        <section id='ownership'>
          <h2 className='color font-size-title'>Collaboration & Growth</h2>
          <p>
            While initially shadowing a senior developer, I quickly took
            ownership of key modules and was trusted with complex tasks like
            deep object validation and framework integration. The successful
            completion of a critical debugging task earned me recognition and
            significantly boosted my confidence in handling production-level
            code independently.
          </p>
        </section>
      </>
    ),
    images: [
      '/assets/projects/shashvat/1.png',
      '/assets/projects/shashvat/2.png',
      '/assets/projects/shashvat/3.png',
    ],
    techStack: [
      { src: StorybookIcon, alt: 'Storybook' },
      { src: JestIcon, alt: 'Jest' },
      { src: ContentStackIcon, alt: 'ContentStack' },
      { src: NextJsIcon, alt: 'Next Js' },
    ],
  },
];

export default projects;
