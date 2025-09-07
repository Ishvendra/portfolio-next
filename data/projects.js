import Link from 'next/link';
import Image from 'next/image';
import Bullet from '../components/Bullet';
import OutLink from '@/components/OutLink';
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
    title: 'Nuskin',
    date: 'Oct 2023',
    overview: (
      <>
        <main className={styles.color}>
          <section className={styles.section}>
            <p>
              <Link
                href='https://www.nuskin.com/nuskin.html'
                target='_blank'
                className={clsx(
                  styles['reveal'],
                  styles['bold'],
                  styles['reveal-link']
                )}
              >
                Nuskin Website Migration
                <OutLink />
              </Link>
              {'  '}
              was a modernization initiative where the legacy CMS-based platform
              was replaced by a fast, scalable frontend architecture using Next
              JS and a{' '}
              <span className={clsx(styles['reveal'], styles['bold'])}>
                headless CMS (ContentStack).
              </span>{' '}
              The goal was to rebuild UI components from scratch, improve
              maintainability, and integrate with a microfrontend architecture
              to support multiple teams working in different frameworks.
            </p>
            <p>
              Additionally, we enabled non-technical teams, such as content
              writers, to efficiently manage content in ContentStack with
              minimal developer intervention by creating custom plugins and{' '}
              <span className={clsx(styles['bold'], styles['highlight'])}>
                extensions.
              </span>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>Project Background</h2>
          <p>
            The existing CMS had severe customization limits. Small changes
            required developer intervention,{' '}
            <strong className={styles.reveal}>slowing down workflows.</strong>{' '}
            Expanding to multiple locales made it even harder to maintain
            consistency.
          </p>
          <Image
            src='/assets/projects/nuskin/limitations.webp'
            alt='traditional CMS limitations'
            height={198}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p>
            Goal: Build a flexible, scalable, and multilingual platform,
            empowering business teams to{' '}
            <strong className={styles.reveal}>
              manage content independently.
            </strong>
          </p>
          <Image
            src='/assets/projects/nuskin/cms-comparison.webp'
            alt='CMS comparison'
            height={458}
            width={892}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 1: traditional vs headless CMS
          </p>
        </section>

        <section id={styles['problem']}>
          <h2 className={styles.sectionTitle}>My Role</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <span className={styles.linkSpan}>
                1. Implemented a{' '}
                <Link
                  href='#microfrontend'
                  scroll={true}
                  className={clsx(
                    styles['reveal'],
                    styles['bold'],
                    styles['reveal-link']
                  )}
                >
                  micro-frontend architecture
                </Link>{' '}
                with Module Federation to enable independent deployment and
                seamless integration of React, Vue, and Next.js sub-apps.
              </span>
            </li>
            <li className={styles['list-item']}>
              <span className={styles.linkSpan}>
                2. Developed custom{' '}
                <Link
                  href='#widget'
                  scroll={true}
                  className={clsx(
                    styles['reveal'],
                    styles['bold'],
                    styles['reveal-link']
                  )}
                >
                  CMS widget
                </Link>{' '}
                to streamline content management and empower content writing
                teams to work efficiently.
              </span>
            </li>
            <li className={styles['list-item']}>
              <span className={styles.linkSpan}>
                3. Built reusable UI components (e.g., cart,{' '}
                <Link
                  href='#ui-components'
                  scroll={true}
                  className={clsx(
                    styles['reveal'],
                    styles['bold'],
                    styles['reveal-link']
                  )}
                >
                  product cards
                </Link>{' '}
                ) following Test-Driven Development (TDD) to ensure reliability
                and maintainability.
              </span>
            </li>
            <li className={styles['list-item']}>
              4. Documented and published UI components in Storybook and
              distributed them as internal NPM packages, improving consistency
              and reusability across teams.
            </li>
            <li className={styles['list-item']}>
              <span className={styles.linkSpan}>
                5. Integrated event-driven analytics with{' '}
                <Link
                  href='#gtm'
                  scroll={true}
                  className={clsx(
                    styles['reveal'],
                    styles['bold'],
                    styles['reveal-link']
                  )}
                >
                  Google Tag Manager
                </Link>{' '}
                (GTM) to capture user interactions and improve tracking
                accuracy.
              </span>
            </li>
          </ul>
        </section>

        <section id='microfrontend'>
          <h2 className={styles.sectionTitle}>Micro-frontend architecture</h2>
          <p>
            I implemented a Micro-frontend architecture using Webpack Module
            Federation, allowing teams to build and deploy independent
            sub-applications (React, Vue, Next.js) that seamlessly integrate at
            runtime.
          </p>
          <Image
            src='/assets/projects/nuskin/micro-frontend.webp'
            alt='microfrontend'
            height={478}
            width={586}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 2: Injecting remote apps at runtime
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Each business domain (e.g., product catalog, cart, checkout)
              became a separate micro-app.
            </li>
            <li className={styles['list-item']}>
              <Bullet />A host container dynamically loads these micro-apps at
              runtime.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Shared libraries (e.g., React, utilities) are managed centrally to
              reduce duplication
            </li>
          </ul>
          <Image
            src='/assets/projects/nuskin/micro-frontend-lld.webp'
            alt='microfrontend'
            height={599}
            width={636}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 3: A high level conceptual diagram
          </p>
        </section>
        <section id='widget'>
          <h2 className={styles.sectionTitle}>Custom Plugins & Widgets</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Parsed JSON content into interactive nested boxes with titles,
              child elements, and selection checkboxes.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Implemented real-time JSON regeneration based on selections,
              preserving correct nesting levels.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Added locale management UI with checkboxes and API integration to
              copy selected JSON across multiple locales.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Enhanced usability by visualizing modular blocks with dashed
              borders and selection counts for each level.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Impact: Empowered non-technical teams to handle complex content
              migrations and locale syncing with minimal developer involvement
            </li>
          </ul>
          <Image
            src='/assets/projects/nuskin/widget.webp'
            alt='custom widget'
            height={599}
            width={587}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 4: Screenshot of the widget I created in Content Stack
          </p>
          <p>
            I also developed a custom ContentStack plugin to parse Excel files,
            enabling editable and draggable cells for seamless content
            management.
          </p>
          <Image
            src='/assets/projects/nuskin/csv-plugin.webp'
            alt='csv plugin'
            height={599}
            width={587}
            className={clsx(styles['caseStudyImage'], styles['round-border'])}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 5: CSV plugin in action
          </p>
        </section>

        <section id='ui-components'>
          <h2 className={styles.sectionTitle}>UI Components</h2>
          <p>
            I built reusable UI components (e.g., cart, product cards) following
            Test-Driven Development (TDD) to ensure reliability and
            maintainability.
          </p>
          <Image
            src='/assets/projects/nuskin/ui-component-development-flow.webp'
            alt='ui component development flow'
            height={208}
            width={587}
            className={styles.caseStudyImage}
            priority
          />
          <Image
            src='/assets/projects/nuskin/ui-component-development-flow-detailed.webp'
            alt='ui component development flow'
            height={837}
            width={587}
            className={styles.caseStudyImage}
            priority
          />
          <Link
            href='https://www.npmjs.com/package/@nuskin/foundation-ui-components'
            target='_blank'
            className={clsx(
              styles['reveal'],
              styles['bold'],
              styles['reveal-link'],
              styles['out-link']
            )}
          >
            npmjs.com/package/@nuskin/foundation-ui-components
            <OutLink />
          </Link>
        </section>

        <section id='gtm'>
          <h2 className={styles.sectionTitle}>
            Event-driven analytics with Google Tag Manager
          </h2>
          <p>
            To measure engagement effectively, I implemented a GTM (Google Tag
            Manager) injector that listened for frontend events (clicks, cart
            actions, locale changes, etc.) and automatically dispatched them to
            GTM.
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Allowed non-technical teams to define custom triggers.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Reduced dependency on developers for event tracking.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Improved tracking accuracy and gave real-time visibility into user
              behavior.
            </li>
          </ul>
          <Image
            src='/assets/projects/nuskin/gtm.webp'
            alt='google tag manager flow'
            height={164}
            width={567}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 5: Google Tag Manager flow
          </p>
        </section>

        <section id={styles['impact']}>
          <h2
            className={clsx(
              styles['color'],
              styles['font-size-title'],
              styles.sectionTitle
            )}
          >
            Impact
          </h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              ⚡ Faster rollout of features in 35+ locales.
            </li>
            <li className={styles['list-item']}>
              ✅ Non-technical teams now self-manage workflows.
            </li>
            <li className={styles['list-item']}>
              🔁 Consistent UI across React, Vue, and Next.js apps.
            </li>
            <li className={styles['list-item']}>
              📊 Actionable analytics from GTM integration.
            </li>
          </ul>
        </section>
      </>
    ),
    images: [
      '/assets/projects/nuskin/1.webp',
      '/assets/projects/nuskin/2.webp',
      '/assets/projects/nuskin/3.webp',
      '/assets/projects/nuskin/4.webp',
    ],
    techStack: [
      { src: StorybookIcon, alt: 'Storybook' },
      { src: JestIcon, alt: 'Jest' },
      { src: ContentStackIcon, alt: 'ContentStack' },
      { src: NextJsIcon, alt: 'Next Js' },
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
              <span className={clsx(styles['bold'], styles['reveal'])}>
                1000+ active clients.
              </span>{' '}
              The platform streamlines core operations like client{' '}
              <span className={clsx(styles['bold'], styles['reveal'])}>
                tracking, order management, analytics, diet planning, and
                communication,
              </span>{' '}
              enabling the business to deliver personalized health and nutrition
              guidance at{' '}
              <span className={clsx(styles['bold'], styles['highlight'])}>
                scale.
              </span>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>Project Background</h2>
          <p>
            Dieticians & trainers were relying on manual PDF creation, email
            sending, and spreadsheets to track{' '}
            <strong className={styles.reveal}>
              client progress and potential leads.
            </strong>{' '}
            This was slow, error-prone, and consumed a lot of admin time.
          </p>
          <p className={styles['mt-10']}>
            Goal: Automate client management with{' '}
            <strong className={styles.reveal}>dynamic diet plans</strong>{' '}
            real-time analytics, streamlined booking, and secure data handling.
          </p>
          <Image
            src='/assets/projects/diet-crm/flowchart.webp'
            alt='Dynamic diet flowchart'
            height={452}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 1: Dynamic Diet Application flowchart
          </p>
        </section>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>My Role</h2>
          <p>
            <strong className={styles.reveal}>
              From requirement gathering{' '}
            </strong>{' '}
            to final delivery and post-launch maintenance. I was the primary
            point of contact for all technical discussions, collaborating
            closely with stakeholders across different phases to shape the{' '}
            <strong className={styles.reveal}>
              product vision into a working solution.
            </strong>
          </p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Architected the complete front-end solution.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Developed PDF and email automation workflows.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Integrated appointment scheduling.
            </li>
          </ul>
          <Image
            src='/assets/projects/diet-crm/pdf-email.webp'
            alt='Email and PDF flow'
            height={338}
            width={600}
            className={clsx(styles['caseStudyImage'], styles['round-border'])}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 2: Pdf and Email automation workflow
          </p>
        </section>

        <section id={styles['my-work']}>
          <h2 className={styles.sectionTitle}>Modules I Developed</h2>
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
          <Image
            src='/assets/projects/diet-crm/active-packages.webp'
            alt='active packages'
            height={452}
            width={718}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 3: Active plans at a glance
          </p>
          <Image
            src='/assets/projects/diet-crm/invoice.webp'
            alt='invoice management system'
            height={452}
            width={612}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 4: Robust invoice management system
          </p>
        </section>

        <section id={styles['impact']}>
          <h2
            className={clsx(
              styles['color'],
              styles['font-size-title'],
              styles.sectionTitle
            )}
          >
            Impact
          </h2>
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
      '/assets/projects/diet-crm/1.webp',
      '/assets/projects/diet-crm/2.webp',
      '/assets/projects/diet-crm/3.webp',
      '/assets/projects/diet-crm/4.webp',
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
              <span className={styles.highlight}>modular expansion.</span>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>Project Background</h2>
          <p>
            Travel businesses using generic software{' '}
            <strong className={styles.reveal}>lacked flexibility.</strong> Every
            client had different requirements, but most CRMs were rigid and hard
            to customize.
          </p>
          <p className={styles['mt-10']}>
            Goal: Build a multi-tenant CRM platform with{' '}
            <strong className={styles.reveal}>configurable features,</strong>{' '}
            modular UI, and secure client handling.
          </p>
        </section>

        <section id={styles['problem']}>
          <h2 className={styles.sectionTitle}>Highlights</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Created scalable frontend architecture supporting multiple
              tenants.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Allowed easy integration of new modules without breaking existing
              flows.
            </li>
          </ul>
          <Image
            src='/assets/projects/tour-touch/configurable-ui.webp'
            alt='configurable ui'
            height={162}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 1: Configurable UI
          </p>
          <p>Configurable UI per Tenant</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Dynamic feature toggling (show/hide features based on tenant
              settings).
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Reduced need for tenant-specific forks.
            </li>
          </ul>
          <Image
            src='/assets/projects/tour-touch/api-architecture.webp'
            alt='api architecture'
            height={460}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 2: API architecture
          </p>
          <p>Standardized API Layer</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Architected API layer using React Query + Axios.
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Caching, retries, and unified error handling → adopted in other
              projects too.
            </li>
          </ul>
          <Image
            src='/assets/projects/tour-touch/report-module.webp'
            alt='report module'
            height={559}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 3: Agent wise report module
          </p>
          <p>Secure Frontend Authentication</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet /> Token handling, session management, and role-based
              access.
            </li>
            <li className={styles['list-item']}>
              <Bullet /> Ensured data protection for tenant-specific
              information.
            </li>
          </ul>
          <p>Travel Interfaces</p>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet /> Developed interfaces for itinerary, package, and
              invoice management.
            </li>
            <li className={styles['list-item']}>
              <Bullet /> Streamlined workflows for travel agencies.
            </li>
          </ul>
          <Image
            src='/assets/projects/tour-touch/enquiry-form.webp'
            alt='enquiry form module'
            height={535}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 4: Enquiry Form module
          </p>
        </section>

        <section id={styles['solution']}>
          <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
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

        <section id={styles['impact']}>
          <h2
            className={clsx(
              styles['color'],
              styles['font-size-title'],
              styles.sectionTitle
            )}
          >
            Impact
          </h2>
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
      </>
    ),
    images: [
      '/assets/projects/tour-touch/1.webp',
      '/assets/projects/tour-touch/2.webp',
      '/assets/projects/tour-touch/3.webp',
      '/assets/projects/tour-touch/4.webp',
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
              <span className={styles.reveal}>Shashvat Mobile App</span> is an
              offline-first school communication and management platform built
              for parents, students, and staff to interact through features like
              chat, notifications, and profile management. Designed as a{' '}
              <span className={styles.reveal}>lightweight mobile solution</span>{' '}
              using React Native, it prioritizes smooth user experience and
              performance on lower-end devices.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>
              Challenges in School Communication:
            </h2>
            <p className={styles['mb-10']}>
              Schools struggled with offline notices, fragmented communication,
              and lack of real-time updates. Shashvat Connect was designed to
              digitize school interactions, reduce paperwork, and improve{' '}
              <span className={styles.highlight}>student engagement.</span>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>Project Background</h2>
          <p>
            Shashvat Connect is a{' '}
            <strong className={styles.reveal}>community-driven</strong> platform
            where I contributed to building a scalable, real-time messaging
            experience with offline-first reliability and{' '}
            <strong className={styles.reveal}>flexible feature</strong>{' '}
            rollouts.
          </p>
        </section>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>My Role</h2>
          <ul className={styles.list}>
            <li className={styles['list-item']}>
              <Bullet />
              Frontend Mobile Developer (React Native)
            </li>
            <li className={styles['list-item']}>
              <Bullet />
              Focus: Real-time chat, offline-first storage,{' '}
              <strong className={styles.reveal}>
                performance optimization.
              </strong>
            </li>
          </ul>
          <Image
            src='/assets/projects/shashvat/fcm.webp'
            alt='Firebase Cloud Messaging'
            height={286}
            width={600}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 1: Firebase Cloud Messaging
          </p>
        </section>

        <section id={styles['problem']}>
          <h2 className={styles.sectionTitle}>
            Key Features & Modules Developed
          </h2>
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
          <Image
            src='/assets/projects/shashvat/user-journey.webp'
            alt='User journey flow'
            height={383}
            width={800}
            className={styles.caseStudyImage}
            priority
          />
          <p
            className={clsx(
              styles['underline'],
              styles['mb-10'],
              styles['figure-caption']
            )}
          >
            Fig 2: User journey for Logging and Chatting
          </p>
        </section>

        <section id={styles['solution']}>
          <h2 className={styles.sectionTitle}>Challenges & Solutions</h2>
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

        <section id={styles['impact']}>
          <h2
            className={clsx(
              styles['color'],
              styles['font-size-title'],
              styles.sectionTitle
            )}
          >
            Impact
          </h2>
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
      </>
    ),
    images: [
      '/assets/projects/shashvat/1.webp',
      '/assets/projects/shashvat/2.webp',
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
    title: 'QMS for KSH Int.',
    date: 'Feb 2025',
    overview: (
      <>
        <main className={styles.color}>
          <section>
            <p>
              <span className={clsx(styles['tooltip'], styles['bold'])}>
                Quality Track
                <span className={styles.tooltiptext}>
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
              <strong className={clsx(styles['reveal'], styles['wavy-yellow'])}>
                {' '}
                Quality Assurance workflows,{' '}
              </strong>
              replacing traditional manual and spreadsheet-based methods with a
              modern, digital-first platform. It centralizes and streamlines
              quality checks, alerts, inspections, certifications, and
              corrective actions,{' '}
              <strong className={styles.reveal}>
                significantly improving compliance in an{' '}
                <span className={clsx(styles['bold'], styles['highlight'])}>
                  efficient manner.
                </span>
              </strong>
            </p>
          </section>
        </main>
      </>
    ),
    sections: (
      <>
        <section id={styles['my-role']}>
          <h2 className={styles.sectionTitle}>My Role</h2>
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

        <section id={styles['problem']}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
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

        <section id={styles['solution']}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
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

        <section id={styles['my-work']}>
          <h2 className={styles.sectionTitle}>Modules I Developed</h2>
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
            <div className={clsx(styles['flexbox'], styles['mb-20'])}>
              <img
                src='/assets/projects/quality-track/NC.webp'
                width={'100%'}
                className={styles['mt-4']}
                alt='NC Flowchart'
              />
              <p className={clsx(styles['underline'], styles['mb-10'])}>
                Fig. 1 - NC flowchart illustration
              </p>
            </div>
            <li className={styles['list-item']}>
              <Bullet />
              8D Reports: Step-wise RCA forms with PDF export, role-based
              collaboration, and history tracking.
            </li>
            <div className={clsx(styles['flexbox'], styles['mb-20'])}>
              <img
                src='/assets/projects/quality-track/8D.webp'
                width={'70%'}
                className='mt-4'
                alt='8D Flowchart'
              />
              <p className={clsx(styles['underline'], styles['mb-10'])}>
                Fig. 2 - 8D illustration
              </p>
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

        <section id={styles['impact']}>
          <h2
            className={clsx(
              styles['color'],
              styles['font-size-title'],
              styles.sectionTitle
            )}
          >
            Impact
          </h2>
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
      '/assets/projects/quality-track/1.webp',
      '/assets/projects/quality-track/2.webp',
      '/assets/projects/quality-track/3.webp',
      '/assets/projects/quality-track/4.webp',
      '/assets/projects/quality-track/5.webp',
    ],
    techStack: [
      { src: NextJsIcon, alt: 'Next JS' },
      { src: ReactQueryIcon, alt: 'React Query' },
      { src: NestJsIcon, alt: 'Nest JS' },
      { src: TypeScriptIcon, alt: 'Type script' },
      { src: MongoIcon, alt: 'Mongo DB' },
    ],
  },
];

export default projects;
