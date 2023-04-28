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

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <PageTitle
        pageTitle="Terms and Conditions"
      />
      <section className="gauto-service-area service-page-area section_70">
        <Container>
          <Row>
            <Col md={12}>
              <div className="site-heading">
                <h4>{t("see_our")}</h4>
                <h2>{t("t&c")}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            TERMS OF USE
            <Row>Galactic Rental</Row>
            <Row>Last Updated: Jan, 2023</Row>
            <p></p>
            <p>Galactic Rental, LLC (“GR” or “We”) provides this website (“Site”) for your use, subject to these Terms and Conditions and all applicable laws and regulations. Please read these Terms and Conditions carefully. By accessing and/or using the Site, you fully and unconditionally accept and agree to be bound by these T&Cs, including binding arbitration. If you do not agree to them, please do not visit or use the Site. GR reserves the right to revise these T&Cs so please check back periodically for changes. Your continued use of the Site following the posting of any changes to these T&Cs constitutes your acceptance of those changes. Updates will be evidenced by a more recent Last Updated date at the top of this page. All changes are effective immediately when We post them, and apply to use of the Site thereafter.</p>
            <Row>USE OF THE SITE</Row>
            <p>
              GR maintains the Site for your informational and non-commercial personal use. Your use of the Site for any other purpose is permissible only upon the express prior written consent of GR. Without limiting the foregoing, you may not: (1) use the Site in a commercial manner, including by distributing, transmitting or publishing the Site or any of its content; (2) interfere with others' use of the Site; (3) impair, in any manner, the Site's operation or functionality including, without limitation, transmitting or posting any software or other materials to this Site that contain any viruses, time bombs, Trojan horses, worms, cancelbots or other computer programming routines that may damage, interfere with, intercept, or expropriate any system, data, or information, or interfere with or disrupt the servers or networks connected to it; (4) interfere with Alamo's rights, including its intellectual property rights, or rights of any third party; (5) frame or otherwise co-brand the Site or any of its content; (6) deep-link to any portion of the Site; (7) make any speculative, false, or fraudulent reservation or any reservation in anticipation of demand; (8) post or transmit to or from the Site any unlawful, threatening, libelous, defamatory, obscene, pornographic, or other material or content that would violate rights of publicity and/or privacy or that would violate any law; or (9) use the Site for any illegal purpose. We reserve the right, in our sole discretion, to terminate or restrict your use of the Site, without notice, for any or no reason, and without liability to you or any third party. In such event, We may inform your Internet service provider of your activities and take appropriate legal action.
              As a condition of your use of this Site, you warrant that (1) you are at least 18 years of age; (2) you possess the legal authority to create a binding legal obligation; (3) you will use this Site in accordance with these Terms of Use; (4) you will only use this Site for legitimate and lawful purposes for you or another person for whom you are legally authorized to act; and (5) all information supplied by you on this Site is true, accurate, current and complete.
            </p>


            <Row>SCRAPERS AND BOTS</Row>
            <p>Use of any robot, spider, site search, retrieval application or other manual or automatic device to retrieve, index, scrape, data mine or in any way gather or extract discount coupons or other content on or available through the Site or reproduce or circumvent the navigational structure or presentation on the Site without GR's express written consent is prohibited.

              You further agree not decompile, reverse-engineer, disassemble, or attempt to derive the source code of any software or security components of the Site.</p>
          </Row>


          <Row>SITE MODIFICATIONS</Row>
          <p>We reserve the right, in our sole discretion, to modify, suspend or discontinue any part of the Site at any time, without notice or liability to you or any third party. We also reserve the right, in our sole discretion, to impose limits on certain features and services.</p>

          <Row>PRIVACY POLICY</Row>
          <p>GR takes your privacy seriously. Any information submitted on or collected through the Site is subject to our Privacy Policy, the terms of which are incorporated into these Terms of Use.</p>


          <Row>LINKS TO OTHER SITES</Row>
          <p>The Site may include links to third-party websites. Alamo does not control and is not responsible for the content or privacy policies of any linked site, and the inclusion of any link on the Site does not imply our endorsement, review or approval of it. Further, the treatment of information collected by the operators of linked websites may be different from our treatment of information submitted on or collected through the Site. For details regarding such operators' treatment of information about users, you must review their privacy policies or terms and conditions of use or contact them for this information.</p>


          <Row>RESERVATIONS AND TRANSACTIONS</Row>
          <p>All reservations and transactions made through the Site are subject to GR’s acceptance, which is in our sole discretion. Without limitation, this means that GR may refuse to accept or may cancel any reservation or transaction, whether or not the reservation or transaction has been confirmed, for any or no reason, in our sole discretion, and without liability to you or any third party. Rental contracts between GR (and any of its affiliates and their respective franchisees) and website users are exclusively entered into at branch locations of Alamo and its affiliates and their respective franchisees and are not entered into through this Site.
            In the event of a conflict between the T&Cs and any rental contract between you and GR or any of its affiliates and/or their respective franchisees, the terms of the rental contract will prevail over the Terms of Use.</p>

          <Row>COUPONS</Row>
          <p>GR provides specific discount coupons from time to time for the exclusive use of employees or members of specific entities with which GR has a contractual relationship. These entity-specific coupons and the proprietary codes affixed on them are our proprietary property and shall only be used by the employees or members of the specific entities for which the coupons apply, subject to and in accordance with any other terms and conditions applicable to such coupons. UNAUTHORIZED USE OR DUPLICATION OF ANY OF OUR ENTITY-SPECIFIC DISCOUNT COUPONS IS STRICTLY PROHIBITED.</p>

          <Row>ELECTRONIC COMMUNICATIONS</Row>
          <p>By using the Site, you consent to receiving electronic communications and notices from GR. You agree that any notice, agreement, disclosure or other communications that We send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.</p>

          <Row>INTELLECTUAL PROPERTY</Row>
          <p>All copyrightable text, graphics, sound, downloads, software (including source and binary code), and other materials, the selection, compilation, arrangement and presentation of all materials, and the overall design of the Site (collectively, the "Website Content") are owned by Galactic Rental Group USA LLC, its related entities or their respective licensors (where applicable) and are protected by law. All rights reserved. You may print a copy of the Website Content made available to you only for your own personal, non-commercial home use, provided that you do not remove any copyright, trademark or other proprietary notices from the Website Content. Any other use of the Website Content is strictly prohibited, unless you have our prior written permission. The Site may also contain content that is owned by third parties, including our advertisers. You may use such third-party content only as expressly authorized by the applicable owner. All requests for permission to reprint or make any other use of the Website Content of Vanguard and its related entities should be addressed to Intellectual Property Manager, Copyright Reprint Permission, 200 Corporate Park Drive, St. Louis, Missouri 63105 or csgroup@galacticrental.com. GR does not warrant that your use of materials displayed on or linked to the Site will not infringe the rights of third parties.
            GR, the GR logo, and DRIVE HAPPY are included in the family of trademarks and service marks owned by Galactic Rental Group. Trademarks and service marks designated with the ® symbol are registered with the U.S. Patent and Trademark Office and with numerous foreign countries. Other trademarks and service marks belonging to Galactic Rental Group may be designated with the “GR” or “GRG” symbols. Our trademarks and service marks may not be used in connection with any product or service without our prior written permission. All other brands, trademarks and names not owned by Galactic Rental Group that appear on the Site are the property of their respective owners, who may or not be affiliated with, connected to or endorsed by Galactic Rental Group.

            Galactic Rental has a number of patents, including U.S. Patent Nos. 8,234,134, 8,271,309, 8,706,534, 8,862,486, and 8,862,488, and Canadian Patent No. CA 2,907,901, covering various aspects of this Site, and users are cautioned from copying, adopting, using or otherwise borrowing any techniques, menu operations, or other functional aspects or features as doing so may well result in liability for patent infringement.
          </p>

          <Row>USE OF INFORMATION SUBMITTED</Row>
          <p>Subject to any applicable terms of our Privacy Policy, you agree that GR and its related entities are free to use any comments, information, ideas or other content contained in any communication you may send to us or otherwise provided to us through the Site (“Your Content”), without compensation, acknowledgement or payment to you, for any purpose whatsoever, including, but not limited to, developing, manufacturing and marketing products and services; creating, modifying or improving the Site or other products or services; and providing attribution of your comments or reviews (for example, listing your name on a review that you submit). You hereby grant GR, and its related entities, a non-exclusive, royalty-free, perpetual, transferable, irrevocable and fully sublicensable right to use Your Content, including the right to reproduce, modify, adapt, translate, distribute, publish, create derivative works from and publicly display or otherwise communicate to the public in any form. You expressly waive any and all ‘moral rights’ (including rights of attribution or integrity) that may exist in Your Content.
            You acknowledge and agree that Your Content is non-confidential and non-proprietary.</p>

          <Row>NO WARRANTY</Row>
          <p>While We use reasonable efforts to maintain the accuracy and reliability of the Site, We do not warrant or represent that it will always function or be error-free. We assume no responsibility or liability for errors or omissions on the Site or for problems with its operation. Your access and use of the Site and its content are at your own risk. Without limiting the foregoing, THE SITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. Some jurisdictions do not allow the exclusion of certain warranties, so the above may not apply to you.</p>

          <Row>LIMITATION OF LIABILITY</Row>
          <p>Your sole remedy for dissatisfaction with this Site or its content is to stop using the Site and/or its content, as applicable.
            IN NO EVENT SHALL GR, ITS RELATED COMPANIES, AND EACH SUCH COMPANY'S DIRECTORS, OFFICERS, EMPLOYEES AND AGENTS (“COVERED PARTIES”) BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS, USE OR INABILITY TO USE THE SITE OR ANY CONTENT PROVIDED BY THE SITE. THE LIMITATIONS OF LIABILITY SHALL APPLY REGARDLESS OF THE FORM OF ACTION, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF ONE OR ALL OF THE COVERED PARTIES HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
            If, notwithstanding the above, one or more Covered Parties is found liable for any loss or damage relating to the use of the Site and its content, you agree that the cumulative liability shall in no event exceed the amounts paid by you for the services rendered by GR that are directly related to said liability.
            Some jurisdictions do not allow the exclusion of certain damages, so the above may not apply to you. If any authority holds any portion of this section to be unenforceable, then liability will be limited to the fullest extent permitted by applicable law.
            The foregoing limitation of liability is not applicable to residents of New Jersey. With respect to residents of New Jersey, GR, its related companies, and each such company’s directors, officers, employees and agents are not liable for any damages arising out of or in connection with your access, use or inability to use the Site, or any information provided by the Site, unless such damages are the result of our negligent or reckless acts or omissions or willful misconduct; and We are not, in any case, liable for indirect, incidental, special, consequential or punitive damages.
          </p>

          <Row>INDEMNITY</Row>
          <p>You agree to indemnify and hold GR and its related companies and each of their respective directors, officers, employees and agents harmless from and against any third-party claim or cause of action, including reasonable attorneys' fees and costs, arising, directly or indirectly, in whole or in part, out of your violation of these Terms of Use, any law or the rights of any person.
          </p>

          <Row>DISPUTE RESOLUTION – JURY TRIAL AND CLASS ACTION WAIVER; MANDATORY ARBITRATION</Row>
          <p>YOU AND GR EACH WAIVE THE RIGHT TO A JURY TRIAL OR TO PARTICIPATE IN A CLASS ACTION PURSUANT TO THE FOLLOWING TERMS. YOU AND GR AGREE TO ARBITRATE ANY AND ALL CLAIMS, CONTROVERSIES OR DISPUTES OF ANY KIND (“CLAIMS”) AGAINST EACH OTHER ARISING OUT OF OR RELATING IN ANY WAY TO the Site or use of the Site or these Terms & Conditions, other than claims relating to infringement of copyright or other intellectual propertY.  FOR THE PURPOSES OF THIS DISPUTE RESOLUTION PROVISION, “YOU” ALSO INCLUDES ANY OF YOUR AGENTS, BENEFICIARIES, ASSIGNS, OR ANYONE ACTING ON BEHALF OF THE FOREGOING, AND “GR ” ALSO INCLUDES ANY OF ITS EMPLOYEES, AGENTS, AFFILIATES, PARENTS, SUBSIDIARIES, BENEFICIARIES, ASSIGNS, AND VENDORS, INCLUDING BUT NOT LIMITED TO ITS SERVICE PROVIDERS AND MARKETING PARTNERS. YOU AND GR  AGREE THAT NO CLAIMS WILL BE PURSUED OR RESOLVED AS A PART OF A CLASS ACTION, PRIVATE ATTORNEY GENERAL OR OTHER REPRESENTATIVE ACTION OR PROCEEDING, THAT NO ARBITRATION FORUM WILL HAVE JURISDICTION TO DECIDE ANY CLAIMS ON A CLASS-WIDE, COLLECTIVE, OR CONSOLIDATED BASIS, AND THAT NO RULES OR OTHER PROCEDURES FOR CLASS-WIDE OR COLLECTIVE ARBITRATION WILL APPLY. This Dispute Resolution Provision is to be broadly interpreted and applies to all Claims based in contract, tort, statute, or any other legal theory. However, the parties agree that either party may bring an individual action in a small claims court with valid jurisdiction, provided that the action remains in that court (other than any appeal of the small claims court ruling), is made on behalf of or against you only and is not made part of a class action, private attorney general action or other representative or collective action.

            (1)   Procedure: A party must send a written Notice of Dispute (“Notice”) describing (a) the nature and basis of the claim; and (b) the relief sought, to the other party. The Notice to GR should be addressed to: CT Corporation, 202 S LaSalle, Suite 814, Chicago, IL 60604 (“Notice Address”). If you and GR do not resolve the claim within thirty (30) days after the Notice is received, a party may commence an arbitration by filing a demand for arbitration with the American Arbitration Association (“AAA”) pursuant to its Consumer Arbitration Rules. Claims will be resolved pursuant to the AAA’s Consumer Arbitration Rules in effect at the time of the demand, as modified by these Terms & Conditions. However, a single arbitrator will be selected according to AAA’s Commercial Arbitration Rules. The arbitrator will conduct hearings, if any, by teleconference or videoconference, rather than by personal appearances, unless the arbitrator determines upon request by you or GR that an in-person hearing is appropriate. Any in-person appearances will be held at a location which is reasonably convenient to both parties with due consideration of their ability to travel and other pertinent circumstances. If the parties are unable to agree on a location, such determination should be made by the AAA or by the arbitrator. The AAA rules are available online at www.adr.org. Except as required by law, neither a party nor an arbitrator may disclose the existence, content, or results of any dispute or arbitration hereunder without the prior written consent of both parties.
            (2)   Arbitrator’s Authority: The arbitrator is bound by this Dispute Resolution Provision, the Federal Arbitration Act(“FAA”) and AAA’s Consumer Arbitration Rules. The arbitrator has no authority to join or consolidate claims, or adjudicate joined and consolidated claims. The arbitrator has exclusive authority to resolve any dispute relating to the scope, interpretation, applicability, enforceability or these Terms & Conditions, including whether they are void. The parties agree that the arbitrator’s decision and award will be final and binding and may be confirmed or challenged in any court with jurisdiction as permitted under the FAA. The arbitrator can award the same damages and relief as a court, but only in favor of an individual party and for a party’s individual claim.
            (3)   Arbitration Costs: You will be responsible for your share of any arbitration fees (e.g., filing, administrative, etc.), but only up to the amount of filing fees you would incur if the claims were filed in court. GR will be responsible for all additional arbitration fees. You are responsible for all other costs/fees that you incur in arbitration, e.g., fees for attorneys, expert witnesses, etc. You will not be required to reimburse GR for any fees unless the arbitrator finds that the substance of your claim(s) or the relief sought is frivolous. If the arbitrator makes such a finding, AAA Rules will govern the payment of all fees, and GR may seek reasonable attorney’s fees. GR will pay all fees and costs it is required by law to pay.
            (4)   Governing Law and Enforcement: Notwithstanding anything in these Terms & Conditions, this Dispute Resolution Provision is made pursuant to and shall be governed by the FAA, 9 U.S.C. §§1-16. This Dispute Resolution Provision was drafted in compliance with the laws in all states, however, if any portion of it is deemed to be invalid or unenforceable or is found not to apply to a claim, the remainder of the Dispute Resolution Provision remains in full force and effect. Provided, however, if the class-arbitration waiver provision is deemed unenforceable, any class action claim(s) must proceed in a court of competent jurisdiction.
          </p>

          <Row>DISPUTES</Row>
          <p>These Terms & Conditions are governed by and construed in accordance with the laws of the State of Missouri, United States of America, without regard to its conflict of law principles. Any action to enforce these Terms & Conditions regarding a claim not subject to binding arbitration must be brought in the federal court in the Eastern District of Missouri or the state courts located in St. Louis County, Missouri. By using the Site, you consent to the jurisdiction and venue of these courts. Except where prohibited, you agree that any and all disputes, claims and causes of action directly or indirectly arising out of the Site must be resolved individually, without resort to any form of class action. This limitation does not apply to residents of New Jersey. Any claim or cause of action you may have with respect to the Site must be commenced within one (1) year after the claim or cause of action arises, regardless of any law to the contrary. This limitation does not apply to residents of New Jersey.</p>

          <Row>GENERAL</Row>
          <p>If any provision of these Terms & Conditions is held to be invalid or unenforceable, that provision must be construed consistent with applicable law, and the remaining provisions must be enforced in accordance with applicable law as nearly as possible to reflect the original intention of the applicable provision. Headings are for reference purposes only and in no way define, limit, construe or describe the scope of such section. Our failure to enforce any provision of these Terms & Conditions shall not constitute a waiver of that or any other provision. These Terms & Conditions, including the policies referred to herein, set forth the entire agreement between you and Alamo in connection with your use of the Site and supersede any and all prior or contemporaneous written or oral agreements between you and GR in connection therewith.</p>

          <Row>CONTACT US</Row>
          <p>If you have any questions about these Terms & Conditions, please visit our Contact Us page to message your questions.</p>
        </Container>
      </section>
    </div>
  );
};

export default TermsConditions;
