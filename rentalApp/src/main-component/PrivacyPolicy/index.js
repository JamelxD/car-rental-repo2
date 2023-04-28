import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import img1 from "../../img/city-transport.png";
import img2 from "../../img/airport-transport.png";
import img3 from "../../img/hospital-transport.png";
import img4 from "../../img/wedding-ceremony.png";
import img5 from "../../img/hotel-transport.png";
import img6 from "../../img/luggege-transport.png";

import "./style.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <PageTitle
        pageTitle="Privacy Policy"
      />
      <section className="gauto-service-area service-page-area section_70">
        <Container>
          <Row>
            <Col md={12}>
              <div className="site-heading">
                <h4>{t("see_our")}</h4>
                <h2>{t("Privacy Policy")}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            GLOBAL PRIVACY POLICY
            <p>
              This policy was last updated January 30, 2023.
              At Galactic Rental Group, we respect your privacy.  We have implemented this privacy policy ("Privacy Policy") to explain our data collection, use, disclosure, and transfer practices, as well as individual access rights you may have when you use our sites and services.  You can learn more in the sections below.</p>
          </Row>
          <p></p>
          <Row>
            Information We Collect from You
          </Row>
          <p>
            CONTACT INFORMATION, including:
            * Name
            * Address
            * Phone numbers
            * Email addresses
            When Renting
            When renting a vehicle, including being added as an authorized additional driver, or joining one of our rental programs, we may collect:
            Driver Qualifications and Identify Verification, including:
            * Driver’s license information, including date of birth and photographs you submit of you and your driver’s license
            * Insurance information
            * Passport
            * Proof of residence
            * Personal references
            Transaction Information, including:
            * Vehicle rental information
            * Rental and return locations
            * Dates of the rental
            * Type of rental and your vehicle preference
            * Ancillary products purchased
            * Airline and flight number
            * Photographs you submit of receipts through the camera feature available on some of our mobile applications and websites
            * Billing information
            * Charges
            * Payments
            * Credit Card information
            Loyalty and Affiliation Information, including:
            * Enterprise, Alamo, or National rewards and loyalty information
            * Online user account details
            * Corporate Account ID numbers
            * Membership numbers
            * Frequent flyer or travel partner affiliations
            Claims Information
            * Information related to details of accidents involving our vehicles, including that of any third parties such as involved individuals, witnesses, and police reports
            Health Information, including:
            * Information about relevant health conditions you have that assist us in providing you with adaptive driving devices; or related to claims involving injuries
            Optional Information, including:
            * Emergency contact information
            * Any preferences or special requirements you may have
            CCTV and Other Cameras
            *   Where available, CCTV video recordings and/or photographs of you in public areas of our rental locations
            Sensitive Information
            Galactic Rental Group collects information that is defined as ‘sensitive personal information’ under various state privacy laws.  While such laws may provide an opt-out opportunity for this information, we use and disclose this information only for purposes permitted by law that do not require an opt-out opportunity.
          </p>
          <Row>When Purchasing a Vehicle</Row>
          <p>
            In addition to the contact information, identity verification, and driver qualification information listed above, when you purchase a vehicle through Galactic Rental Car Sales, and apply for financing, we will also collect:
            Financial and Personal History Information, including:

            Income
            Credit history
            Employment history
            Other personal information required to complete the credit application
            Car Sale Transaction Information, including:

            Vehicle purchased
            Purchase price
            Vehicle trade-in
            Ancillary products purchased
          </p>

          <Row>When contacting us for Accident Management Assistance services</Row>
          <p>
            In addition to the contact information, driving qualification, transactional and health information listed above, when you contact us for accident management assistance purposes (which we may administer on behalf of the entity that refers your details to us, be it your insurer, manufacturer, employer, dealership, fleet management provider or breakdown provider), we will also collect:

            Claims information, including:

            Information related to details of accidents, including that of any third parties such as involved individuals, witnesses and police reports
            Insurance details
            Information about the incident to determine who is at fault
            Vehicle details
            Credit repair details
            Details regarding your vehicle repair needs and your onward mobility needs
          </p>

          <Row>When using our Website</Row>
          <p>
            We collect:

            Browser Information, including:

            Web logs
            Geo-location
            Your Device Information, including:

            Unique device identifiers
            IP address
            Operating system
            Location information
            Device connections (which may be via Bluetooth or other connection services through our mobile application)
            Location Information (where enabled and with your permission) is used for the following purposes:

            Our websites use location information (such as postal code, city, metropolitan or geographic area) from your device to provide services, such as finding a branch or location.
            When using your mobile device, location information and device connections are used to provide you with notifications, offers, confirm rental status information, or provide other information to enhance your experience.
            Where available, allowing use of location information can enable you to locate the vehicle assigned to you or to expedite your pickup and return by allowing access when in proximity to your assigned vehicle.
            Permissions to use your device’s camera enables you to upload your photo ID and/or the vehicle’s condition for expedited services (where available).
            Permissions to use your device’s precise geolocation information, camera or Bluetooth connection can be turned off at any time by changing the settings in the mobile application or on your device.  Some features or service options may not be available when these items are turned off.
          </p>

          <Row>Cookies and Other Tracking Technologies</Row>
          <p>
            We (and our service providers) use cookies and web beacons on our websites, mobile apps, electronic communications, and similar technology,  to collect information to remember your preferences, improve the user experience and tailor the advertisements you see to those that are most relevant to you.

            For more information on the collection of online information and how to opt-out, please see our Cookie Policy
          </p>

          <Row>Information We Collect from Third-Parties</Row>
          <p>
            Third parties provide us with additional information about you or your household, including:

            Referral sources, such as third-party online booking sites (who provide us general contact information and a booking confirmation number to facilitate the rental), your employer (general contact information), credit unions, and your insurance provider (general contact and policy information);
            Where applicable, our Refer-A-Friend, or similar programs;
            Hotel, airline and membership clubs who provide us your general contact information and booking information;
            Third parties who, for fraud prevention purposes, provide us with (if relevant financial) and identity-related verification and document authentication;
            Credit and financing partners, including credit reporting agencies, who facilitate the completion of credit applications when financing a vehicle purchase;
            Franchisees and fulfillment providers who provide us information regarding your rental transactions;
            Service providers, such as customer support (customer service-related information and enquiries made by you), security services (footage of you from our CCTV system), and customer survey providers (your response to our customer service surveys);
            Marketing providers who provide information to assist us to better communicate our products and services, including email acquisition services, data hygiene services, data brokers, and market research partners and platforms;
            Social media content you have made available to the publi
          </p>

          <Row>Our Vehicles</Row>
          <p>
            Connected Car and Telematics Data

            Our vehicles may be equipped with telematics devices such as pre-installed event data recorders, global positioning devices, OnStar® and other communications systems that may be connected to the Internet or cellular services. We (and at times the vehicle manufacturer and other authorized third parties) may collect information from these telematics devices and other services and technologies and use and share it as described below or as otherwise set out in this Privacy Policy. This information is associated with the vehicle only and maintained as de-identified or anonymized data and will only be linked for the purposes and in the situations described below.  Any information that is linked to you will be treated as personal information in accordance with this Privacy Policy.  You are responsible for informing passengers and other drivers that vehicle data is collected and used as described in this section.

            You may also choose to accept or purchase optional devices that enable you to collect certain vehicle data.  Please refer to the manufacturer’s terms and conditions and privacy policy.

            The use of telematics devices and other pre-installed services and technologies are subject to our rental terms and conditions and, in some cases, the vehicle manufacturer’s and/or technology provider’s terms and conditions and privacy policy.  For OnStar, information is available at www.onstar.com.  For other vehicle manufacturers please visit here.  Some or all of these features may be turned on at all times, even when other services or other media in the vehicle are turned off.  If you are unsure whether your rental vehicle contains telematics devices or technologies or systems, please speak to a member of our team at the rental location.

            We collect and use vehicle data as follows:

            Fuel information: We use this information to facilitate recording and billing for fuel charges.
            Odometer information: We use this information to facilitate billing for mileage charges (where applicable) and to help us manage our fleet.
            Vehicle diagnostic and performance information: We use such information to help us identify vehicle maintenance needs and manage the fleet.
            Mobile device or app connections to help us issue certain commands to the vehicle to facilitate or expedite your rental or to facilitate your CarShare or Car Club transaction(See section When using our Websites and Mobile Applications).
            Location information: We collect and use vehicle location information to:
            Enable our roadside assistance providers to provide you roadside assistance.
            Enable emergency service providers to dispatch emergency services to you.
            Assist us in recovering a vehicle we reasonably believe is lost, stolen or abandoned.
            To facilitate the vehicle return process (where remote return is available) and billing purposes.
            Event data recorders: In certain claims situations we may use this information in connection with accident investigations and claims-related efforts.
            Legally Compelled Disclosure and Emergency Circumstances: We may share vehicle information, including location information, where legally compelled or in emergency circumstances.  In addition, in the United Kingdom and European Union, our vehicles are required to be equipped with eCall technology, which is activated if your vehicle is involved in an accident. eCall will automatically call and provide information regarding the accident to emergency services. We will also use, disclose and have access to this information.
            We retain vehicle information based on retention periods in accordance with our business needs and legal requirements.  We may use and store this data after the expiration of our contract with you.
          </p>

          <Row>Infotainment Systems and Vehicle Manufacturer Apps</Row>
          <p>
            If you pair a mobile device with our vehicles’ navigation or infotainment systems and choose to use OnStar, Apple CarPlay, Android Auto or other similar third-party software or services on the vehicle or if you choose to use any navigational features on the vehicle’s infotainment systems or other device, your personal information and other data may be transferred and stored on these systems. We cannot guarantee the privacy or confidentiality of such information. You should delete all such personal information and other data from these systems or devices before the vehicle is returned to avoid subsequent occupants of the vehicle accessing this information.

            If you download a mobile app made available by a vehicle manufacturer or other third party and register the vehicle in that app, your use of the app may result in the sharing of telematics data and other information (including location information and personal information) with the vehicle manufacturer or other third party. Your use of these apps is strictly governed by the third-party mobile apps’ terms and conditions and privacy policies. Before the vehicle is returned, you should either remove the app from your mobile device or delete the vehicle from the app.
          </p>

          <Row>Children's Privacy</Row>
          <p>
            Our websites and online marketing are not directed to, and Galactic Rental Group does not knowingly collect personal information from, children under the age of 18 or your country's age of minority. If you nevertheless believe that your child has provided us with their personal information and you need to let us know to delete it, please contact us using the link at the top of this page.
          </p>

          <Row>How We Use Information About You</Row>
          <p>
            We use the information we collect from you or about you to provide you with our services and for the following purposes:

            Where it is necessary for the performance of a contract which governs the services we provide to you, including
            To assist the transactions that you (or someone on your behalf) request, such as reserving, renting, purchasing, leasing motor vehicles, fleet management services or providing accident management services;
            Unless where consent may be required by applicable law, to communicate important information regarding your reservation, rental, lease or purchase of a vehicle.  These communications are transactional in nature and will be sent to you via email, text or calls;
            To provide customer service related to your interactions with us or to respond to your enquiry;
            To enroll you in our loyalty programs and send information relating to your ongoing membership of these programs;
            To enroll you in our CarShare and Car Club business, and to send information relating to your ongoing membership of these business.
            Where necessary for us to comply with a legal obligation, including
            To use and share information about your vehicle's location with emergency services in the event that you are involved in a road accident;
            To use and share information with government and regulatory authorities when required by law or in response to legal process, obligation, or request, including checking appropriate sanction lists.
            Where it is necessary for our legitimate interests, as listed below, and where our interests are not overridden by your data protection rights, including
            To communicate important information about your rental and provide you great service. These communications, which are transactional in nature, will be sent to you via email, text or calls;
            To assist us in providing better products and services: for example, to evaluate the performance of our staff, to assess the quality of products and services received and to help us improve our websites, facilities and services.  Unless where consent may be required by applicable law, your feedback may be requested via email, text or call;
            To compile statistics and analysis about our customers' use of our websites, products and services. These statistics are used only to enable us to provide better customer service, products, features and functionality to you and other customers in the future;
            Where permissible, to develop a profile of you and your interactions with us so that we can provide tailored offers, opportunities and services that may be of interest to you;
            To protect our legal rights and manage the security of our networks and property, including to protect our websites from spam and abuse. For example, we will use CCTV to ensure the security of our premises;
            For loss prevention, we maintain a record of individuals whose past interactions with us indicate they may present a non-payment or safety risk;
            For fraud prevention purposes, to verify identity and authenticate identity-related documentation as well as additional points of contact for rental related communications through personal references;
            To use and share your information with third parties to permit us to pursue available remedies or limit damage that we may sustain and to enforce the terms of any rental agreement or our websites' terms and conditions;
            To enable us to use vehicle data systems for purposes listed in the Vehicle Data section above;
            Unless where consent may be required by applicable law, to send you certain promotional or targeted marketing communications, opportunities and services that may be of interest to you. These will include invitations to join our loyalty programs, upgrade announcements, communications regarding an incomplete online membership form or reservation, and offers related to other services and products we offer. Some of these offers will be received in advertising on non-Enterprise sites, including on social media, or other digital platforms;
            To de-identify or aggregate personal information collected about you and use it for any lawful purpose;
            To transfer your data as described in the “Global Data Transfers and Processing” section; and
            To receive, use and share your information with third parties to prevent, detect, and report fraud and protect our business interests and rights, privacy, safety and property, or that of individuals and the public. We will do this to respond to law enforcement request, collect unpaid bills, to avoid liability for penalties you incur (e.g. traffic citations) and for claims processing purposes.
            Where you have given consent, as required by your country’s applicable law, including
            To assist us in providing you with the most appropriate vehicles, such as those with adaptive driving devices. In some cases, this will require us to infer or explicitly collect information about your health or physical condition;
            To send one-time use security tokens via text;
            Where applicable, to ask for you feedback by email, text or call, to assist us in providing better products and services: for example, to evaluate the performance of our staff, to assess the quality of products and services received and to help us improve our websites, facilities and services;
            Where applicable to ask if you want to receive by email or text promotional or targeted marketing communications, opportunities and services that may be of interest to you. These will include invitations to join our loyalty programs, upgrade announcements, offers and discounts, online communications regarding an incomplete online membership form or reservation and offers related to other services and products we offer. Some of these offers will be received in advertising on non-Enterprise sites, including on social media, or other digital platforms;
            Where applicable, to use of vehicle information to assist and manage transactions that you have agreed to and to fulfil obligations under the Rental Agreement;
            You can choose to withdraw your consent at any time; however, such withdrawal does not affect the lawfulness of processing before your withdrawal.
          </p>

          <Row>Retention of Your Personal Information</Row>
          <p>
            We retain your personal information for as long as we need to fulfil our business purposes, as set out below:

            Rental transactions

            We may keep the data associated to your rental agreement for up to seven years from the date of the rental or in accordance with our business needs, subject to other local legal requirements. We keep records of payments you have made for two years from the date of the transaction (depending on the location of the rental).

            Car Sales

            We keep the data associated to the sale of a vehicle for up to ten years from the date of sale, subject to other local legal requirements.

            Claims

            We keep the data associated to claims involving our renters or other individuals for the life of the claim and up to ten years from conclusion of our obligation, subject to other legal requirements

            Customer service-related queries

            We keep general queries for three years, unless you make a complaint, in which case, we keep complaint data for seven years.

            Marketing and analytical purposes

            We keep data linked to cookies and other online identifiers up to three years. We keep other marketing information, such as email subscription and loyalty enrollment data for up to seven years after your last interaction with us.

            Disputes & law enforcement

            If we are involved in litigation or a governmental or regulatory investigation, then we keep data throughout the period of litigation or investigation and for five years after that. If a settlement means that we must keep data for longer, then we keep data for the period required to administer the settlement. If we provide data to law enforcement agencies, then we keep a record of this for one year beyond the end of the investigation.
          </p>

          <Row>Who We Share Information With</Row>
          <p>
            Fulfillment Providers
            Rental Transactions

            In certain countries, we may use a fulfillment provider to carry out your rental car transaction. For example, if you make a reservation for a car and driver in countries that require a driver, we will send your Contact and Transactional Information to the fulfillment provider in those countries. Where car and driver services are made available for you to reserve, these services are fulfilled by the company disclosed at the time of reservation. While made available through our branded websites, these companies are independent operators and you are encouraged to check the privacy policy of the company applicable to your transaction. See the Franchisee & Fulfillment Provider page for a list.
          </p>

          <Row>Government Authorities</Row>
          <p>
            Your personal information may also be shared with government authorities.
          </p>

          <Row>Your Rights</Row>
          <p>
            EU General Data Protection Regulation (GDPR),  UK Data Protection, Brazilian General Data Protection Law (LGPD), and Japan’s Act on the Protection of Personal Information (APPI)
            If GDPR, UK Data Protection, LGPD, or APPI is applicable to your transaction in the European Economic Area, United Kingdom,  Switzerland, Brazil, or Japan you have the right to:

            Opt-out of some collection or uses of your personal information, including the use of cookies and similar technologies and the use of your personal information for marketing purposes, and the anonymization of your personal information for data analyses;
            Access your personal information, rectify it, restrict or object to its processing, or subject to exemptions under law, request its deletion;
            Receive the personal information you provided to us to transmit it to another company;
            Withdraw any consent provided; and
            Where applicable, lodge a complaint with your supervisory authority.
            Contact our Data Protection Officer (DPO@ehi.com) or submit a privacy complaint through our Global Privacy Portal form.
            California
            Under the California Consumer Privacy Act (CCPA), California residents have certain rights with respect to personal information about them we have collected.  If you are a California resident, you may exercise the following rights regarding your personal information, subject to certain exceptions and limitations:

            Right to access the personal information we have collected about you and learn how we collect this information, our purpose in collecting it, and the types of parties we may have disclosed it to;
            Right to correct inaccurate personal information
            Right to delete the personal information we have collected from you;
            Right to opt-out of our sale(s) of your personal information  and
            The right not to receive discriminatory treatment for the exercise of [the relevant] privacy rights conferred by the CCPA.
            Virginia
            Under the Virginia Consumer Data Protection Act (CDPA), Virginia residents have certain rights with respect to personal information about them we have collected.  If you are a Virginia resident, you may exercise the following rights regarding your personal information, subject to certain exceptions and limitations:

            Right to confirm the processing of and access to your personal information;
            Right to correct inaccurate personal information we have collected from you;
            Right to delete the personal information we have collected from you; and
            Right to opt-out of targeted advertising.
            You also have the right to appeal the decision we have made in connection with your privacy rights request. Please submit all appeal requests by replying to the communication resolving your original request or emailing us at privacyrequests@ehi.com.

            Canada
            If you are a resident of Canada, you have the right to:

            Access your personal information and rectify it;
            Withdraw any consent provided; and
            Where applicable, lodge a complaint with your supervisory authority.

          </p>

          <Row>Exercising Your Rights</Row>
          <p>
            You may exercise any applicable rights described above by accessing our Global Privacy Portal on our Contact Us page.  If you wish to lodge a complaint with a supervisory authority, in Europe you may contact the necessary supervisory authority. In Canada you may contact the Privacy Commissioner of Canada by visiting https://www.priv.gc.ca/cu-cn/index_e.asp or at Office of the Privacy Commissioner of Canada, 30 Victoria Street, Gatineau, Quebec, K1A 1H3.

            We may require additional information from you to verify your identity and residence before we can process your request.  For California and Virginia residents, wishing to exercise rights under their state’s privacy law,  you may be required to provide your driver’s license or official state identification document in order to provide proof of residence.  Please be sure to redact your photograph and all identifying information, other than your name, address and driver’s license number.  We also reserve the right to restrict access to your information or to limit your rights (e.g., if such disclosure is prohibited by law or if the rights of another individual might be violated).  In some instances, this may mean that we are able to retain your personal information even if you withdraw your consent.

            California residents may designate an authorized agent to make a CCPA request on your behalf by completing and signing the form available here.

            If you live in British Columbia, Alberta, or Quebec, please refer to the following resources. In British Columbia, you may find information on how to exercise your rights at the British Columbia Office of the Information and Privacy Commissioner website. In Alberta, you may find information on access requests here and making complaints here. In Quebec, you may find information on your privacy rights here at the Commission d’accès à l’information Quebec website.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
