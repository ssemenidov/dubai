import privacyhtml from "./privacy.html";
import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import Helmet from "react-helmet";

export const Privacy = () => {
  return (
    <StyledScreen>
      <Helmet>
        <title>Toy boutique</title>
        <meta name="description" content="privacy policy" />
      </Helmet>
      <Header />
      <Div44>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Div44>
      <Footer />
    </StyledScreen>
  );
};

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Div44 = styled.div`
  max-width: 1340px;
  margin: auto;
  width: 100%;
  position: relative;

  @media (max-width: 1340px) {
    margin: 0 15px;
    width: auto;
  }
`;

const html = `
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:Helvetica;
	panose-1:2 11 6 4 2 2 2 2 2 4;}
@font-face
	{font-family:Wingdings;
	panose-1:5 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>

<div class=WordSection1>

<p class=MsoNormal style='line-height:45.0pt'><b><span
style='font-size:30.0pt;font-family:Helvetica;color:black'>Privacy Policy</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Last updated: </span><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>January 13, 2024</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>This Privacy Policy
describes Our policies and procedures on the collection, use and disclosure of
Your information when You use the Service and tells You about Your privacy
rights and how the law protects You.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We use Your Personal
data to provide and improve the Service. By using the Service, You agree to the
collection and use of information in accordance with this Privacy Policy.</span></p>

<p class=MsoNormal style='line-height:36.0pt'><b><span
style='font-size:24.0pt;font-family:Helvetica;color:black'>Interpretation and
Definitions</span></b></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Interpretation</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The words of which
the initial letter is capitalized have meanings defined under the following
conditions. The following definitions shall have the same meaning regardless of
whether they appear in singular or in plural.</span></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Definitions</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>For the purposes of
this Privacy Policy:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Account</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;means a unique
     account created for You to access our Service or parts of our Service.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Affiliate</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;means an entity that
     controls, is controlled by or is under common control with a party, where
     &quot;control&quot; means ownership of 50% or more of the shares, equity
     interest or other securities entitled to vote for election of directors or
     other managing authority.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica;color:black'>Company</span></b><span
     style='font-size:12.0pt;font-family:Helvetica;color:black'>&nbsp;(referred
     to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
     &quot;Our&quot; in this Agreement) refers to </span><span
     style='font-size:12.0pt;font-family:Helvetica'>Toy Boutique, Capitol
     complex Factory 2 Al Qouz 4 Street 14c Dubai, United Arab Emirates.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Cookies</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;are small files that
     are placed on Your computer, mobile device or any other device by a
     website, containing the details of Your browsing history on that website
     among its many uses.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Country</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;refers to: </span><span
     style='font-size:12.0pt;font-family:Helvetica;color:black'>United Arab
     Emirates</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Device</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;means any device that
     can access the Service such as a computer, a cellphone or a digital
     tablet.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Personal Data</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;is any information
     that relates to an identified or identifiable individual.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Service</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;refers to the Website.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Service Provider</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;means any natural or
     legal person who processes the data on behalf of the Company. It refers to
     third-party companies or individuals employed by the Company to facilitate
     the Service, to provide the Service on behalf of the Company, to perform
     services related to the Service or to assist the Company in analyzing how
     the Service is used.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Usage Data</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;refers to data
     collected automatically, either generated by the use of the Service or
     from the Service infrastructure itself (for example, the duration of a
     page visit).</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Website</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;refers to </span><span
     style='font-size:12.0pt;font-family:Helvetica;color:black'>Toy Boutique</span><span
     style='font-size:12.0pt;font-family:Helvetica'>, accessible from&nbsp;</span><span
     lang=RU><a href="https://toyboutique.ae/" ><span
     lang=EN-US style='font-size:12.0pt;font-family:Helvetica;color:black'>https://toyboutique.ae</span></a></span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>You</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;means the individual
     accessing or using the Service, or the company, or other legal entity on
     behalf of which such individual is accessing or using the Service, as
     applicable.</span></li>
</ul>

<p class=MsoNormal style='line-height:36.0pt'><b><span
style='font-size:24.0pt;font-family:Helvetica;color:black'>Collecting and Using
Your Personal Data</span></b></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Types of Data
Collected</span></b></p>

<p class=MsoNormal style='line-height:22.5pt'><b><span
style='font-size:15.0pt;font-family:Helvetica;color:black'>Personal Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>While using Our
Service, We may ask You to provide Us with certain personally identifiable
information that can be used to contact or identify You. Personally
identifiable information may include, but is not limited to:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Email address</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>First name and last
     name</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Phone number</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     style='font-size:12.0pt;font-family:Helvetica'>Address, State, Province,
     ZIP/Postal code, City</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Usage Data</span></li>
</ul>

<p class=MsoNormal style='line-height:22.5pt'><b><span
lang=RU style='font-size:15.0pt;font-family:Helvetica;color:black'>Usage Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Usage Data is
collected automatically when using the Service.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Usage Data may
include information such as Your Device's Internet Protocol address (e.g. IP
address), browser type, browser version, the pages of our Service that You
visit, the time and date of Your visit, the time spent on those pages, unique
device identifiers and other diagnostic data.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>When You access the
Service by or through a mobile device, We may collect certain information
automatically, including, but not limited to, the type of mobile device You
use, Your mobile device unique ID, the IP address of Your mobile device, Your
mobile operating system, the type of mobile Internet browser You use, unique
device identifiers and other diagnostic data.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We may also collect
information that Your browser sends whenever You visit our Service or when You
access the Service by or through a mobile device.</span></p>

<p class=MsoNormal style='line-height:22.5pt'><b><span
style='font-size:15.0pt;font-family:Helvetica;color:black'>Tracking
Technologies and Cookies</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We use Cookies and
similar tracking technologies to track the activity on Our Service and store
certain information. Tracking technologies used are beacons, tags, and scripts
to collect and track information and to improve and analyze Our Service. </span><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>The technologies
We use may include:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Cookies or Browser Cookies.</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;A cookie is a small
     file placed on Your Device. You can instruct Your browser to refuse all
     Cookies or to indicate when a Cookie is being sent. However, if You do not
     accept Cookies, You may not be able to use some parts of our Service.
     Unless you have adjusted Your browser setting so that it will refuse
     Cookies, our Service may use Cookies.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>Web Beacons.</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;Certain sections of
     our Service and our emails may contain small electronic files known as web
     beacons (also referred to as clear gifs, pixel tags, and single-pixel
     gifs) that permit the Company, for example, to count users who have
     visited those pages or opened an email and for other related website
     statistics (for example, recording the popularity of a certain section and
     verifying system and server integrity).</span></li>
</ul>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Cookies can be
&quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies
remain on Your personal computer or mobile device when You go offline, while
Session Cookies are deleted as soon as You close Your web browser. You can
learn more about cookies on&nbsp;</span><span lang=RU style='font-size:12.0pt;
font-family:Helvetica;color:black'><a
href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank"><span
lang=EN-US style='color:black'>TermsFeed website</span></a></span><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>&nbsp;article.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We use both Session
and Persistent Cookies for the purposes set out below:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Necessary /
     Essential Cookies</span></b></li>
</ul>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>Type:
Session Cookies</span></p>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>Administered
by: Us</span></p>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Purpose: These
Cookies are essential to provide You with services available through the
Website and to enable You to use some of its features. They help to
authenticate users and prevent fraudulent use of user accounts. Without these
Cookies, the services that You have asked for cannot be provided, and We only
use these Cookies to provide You with those services.</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Cookies Policy /
     Notice Acceptance Cookies</span></b></li>
</ul>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>Type:
Persistent Cookies</span></p>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>Administered
by: Us</span></p>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Purpose: These
Cookies identify if users have accepted the use of cookies on the Website.</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Functionality
     Cookies</span></b></li>
</ul>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>Type:
Persistent Cookies</span></p>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>Administered
by: Us</span></p>

<p class=MsoNormal style='margin-left:.5in;line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Purpose: These
Cookies allow us to remember choices You make when You use the Website, such as
remembering your login details or language preference. The purpose of these
Cookies is to provide You with a more personal experience and to avoid You
having to re-enter your preferences every time You use the Website.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>For more information
about the cookies we use and your choices regarding cookies, please visit our
Cookies Policy or the Cookies section of our Privacy Policy.</span></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Use of Your Personal
Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The Company may use
Personal Data for the following purposes:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>To provide and maintain our
     Service</span></b><span style='font-size:12.0pt;font-family:Helvetica'>,
     including to monitor the usage of our Service.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>To manage Your Account:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;to manage Your
     registration as a user of the Service. The Personal Data You provide can
     give You access to different functionalities of the Service that are available
     to You as a registered user.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>For the performance of a
     contract:</span></b><span style='font-size:12.0pt;font-family:Helvetica'>&nbsp;the
     development, compliance and undertaking of the purchase contract for the
     products, items or services You have purchased or of any other contract
     with Us through the Service.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>To contact You:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;To contact You by
     email, telephone calls, SMS, or other equivalent forms of electronic
     communication, such as a mobile application's push notifications regarding
     updates or informative communications related to the functionalities,
     products or contracted services, including the security updates, when
     necessary or reasonable for their implementation.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>To provide You</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;with news, special
     offers and general information about other goods, services and events
     which we offer that are similar to those that you have already purchased
     or enquired about unless You have opted not to receive such information.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>To manage Your requests:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;To attend and manage
     Your requests to Us.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>For business transfers:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;We may use Your
     information to evaluate or conduct a merger, divestiture, restructuring,
     reorganization, dissolution, or other sale or transfer of some or all of
     Our assets, whether as a going concern or as part of bankruptcy,
     liquidation, or similar proceeding, in which Personal Data held by Us
     about our Service users is among the assets transferred.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>For other purposes</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>: We may use Your
     information for other purposes, such as data analysis, identifying usage
     trends, determining the effectiveness of our promotional campaigns and to
     evaluate and improve our Service, products, services, marketing and your
     experience.</span></li>
</ul>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We may share Your
personal information in the following situations:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>With Service Providers:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;We may share Your
     personal information with Service Providers to monitor and analyze the use
     of our Service, to contact You.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>For business transfers:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;We may share or
     transfer Your personal information in connection with, or during
     negotiations of, any merger, sale of Company assets, financing, or
     acquisition of all or a portion of Our business to another company.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>With Affiliates:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;We may share Your
     information with Our affiliates, in which case we will require those
     affiliates to honor this Privacy Policy. Affiliates include Our parent
     company and any other subsidiaries, joint venture partners or other
     companies that We control or that are under common control with Us.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>With business partners:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;We may share Your
     information with Our business partners to offer You certain products,
     services or promotions.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>With other users:</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>&nbsp;when You share
     personal information or otherwise interact in the public areas with other
     users, such information may be viewed by all users and may be publicly
     distributed outside.</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><b><span
     style='font-size:12.0pt;font-family:Helvetica'>With Your consent</span></b><span
     style='font-size:12.0pt;font-family:Helvetica'>: We may disclose Your
     personal information for any other purpose with Your consent.</span></li>
</ul>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Retention of Your
Personal Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The Company will
retain Your Personal Data only for as long as is necessary for the purposes set
out in this Privacy Policy. We will retain and use Your Personal Data to the
extent necessary to comply with our legal obligations (for example, if we are
required to retain your data to comply with applicable laws), resolve disputes,
and enforce our legal agreements and policies.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The Company will
also retain Usage Data for internal analysis purposes. Usage Data is generally
retained for a shorter period of time, except when this data is used to
strengthen the security or to improve the functionality of Our Service, or We
are legally obligated to retain this data for longer time periods.</span></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Transfer of Your
Personal Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Your information,
including Personal Data, is processed at the Company's operating offices and in
any other places where the parties involved in the processing are located. It
means that this information may be transferred to — and maintained on —
computers located outside of Your state, province, country or other
governmental jurisdiction where the data protection laws may differ than those
from Your jurisdiction.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Your consent to this
Privacy Policy followed by Your submission of such information represents Your
agreement to that transfer.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The Company will
take all steps reasonably necessary to ensure that Your data is treated
securely and in accordance with this Privacy Policy and no transfer of Your
Personal Data will take place to an organization or a country unless there are
adequate controls in place including the security of Your data and other
personal information.</span></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Delete Your Personal
Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>You have the right
to delete or request that We assist in deleting the Personal Data that We have
collected about You.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Our Service may give
You the ability to delete certain information about You from within the
Service.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>You may update,
amend, or delete Your information at any time by signing in to Your Account, if
you have one, and visiting the account settings section that allows you to
manage Your personal information. You may also contact Us to request access to,
correct, or delete any personal information that You have provided to Us.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Please note,
however, that We may need to retain certain information when we have a legal
obligation or lawful basis to do so.</span></p>

<p class=MsoNormal style='line-height:27.0pt'><b><span
style='font-size:18.0pt;font-family:Helvetica;color:black'>Disclosure of Your
Personal Data</span></b></p>

<p class=MsoNormal style='line-height:22.5pt'><b><span
style='font-size:15.0pt;font-family:Helvetica;color:black'>Business
Transactions</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>If the Company is
involved in a merger, acquisition or asset sale, Your Personal Data may be
transferred. We will provide notice before Your Personal Data is transferred
and becomes subject to a different Privacy Policy.</span></p>

<p class=MsoNormal style='line-height:22.5pt'><b><span
style='font-size:15.0pt;font-family:Helvetica;color:black'>Law enforcement</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Under certain
circumstances, the Company may be required to disclose Your Personal Data if
required to do so by law or in response to valid requests by public authorities
(e.g. a court or a government agency).</span></p>

<p class=MsoNormal style='line-height:22.5pt'><b><span
style='font-size:15.0pt;font-family:Helvetica;color:black'>Other legal
requirements</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The Company may
disclose Your Personal Data in the good faith belief that such action is
necessary to:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Comply with a legal
     obligation</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     style='font-size:12.0pt;font-family:Helvetica'>Protect and defend the
     rights or property of the Company</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     style='font-size:12.0pt;font-family:Helvetica'>Prevent or investigate
     possible wrongdoing in connection with the Service</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     style='font-size:12.0pt;font-family:Helvetica'>Protect the personal safety
     of Users of the Service or the public</span></li>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>Protect against
     legal liability</span></li>
</ul>

<p class=MsoNormal style='line-height:27.0pt'><b><span
lang=RU style='font-size:18.0pt;font-family:Helvetica;color:black'>Security of
Your Personal Data</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>The security of Your
Personal Data is important to Us, but remember that no method of transmission
over the Internet, or method of electronic storage is 100% secure. While We
strive to use commercially acceptable means to protect Your Personal Data, We cannot
guarantee its absolute security.</span></p>

<p class=MsoNormal style='line-height:36.0pt'><b><span
style='font-size:24.0pt;font-family:Helvetica;color:black'>Children's Privacy</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Our Service does not
address anyone under the age of 13. We do not knowingly collect personally
identifiable information from anyone under the age of 13. If You are a parent
or guardian and You are aware that Your child has provided Us with Personal
Data, please contact Us. If We become aware that We have collected Personal
Data from anyone under the age of 13 without verification of parental consent,
We take steps to remove that information from Our servers.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>If We need to rely
on consent as a legal basis for processing Your information and Your country
requires consent from a parent, We may require Your parent's consent before We
collect and use that information.</span></p>

<p class=MsoNormal style='line-height:36.0pt'><b><span
style='font-size:24.0pt;font-family:Helvetica;color:black'>Links to Other
Websites</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>Our Service may
contain links to other websites that are not operated by Us. If You click on a
third party link, You will be directed to that third party's site. We strongly
advise You to review the Privacy Policy of every site You visit.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We have no control
over and assume no responsibility for the content, privacy policies or
practices of any third party sites or services.</span></p>

<p class=MsoNormal style='line-height:36.0pt'><b><span
style='font-size:24.0pt;font-family:Helvetica;color:black'>Changes to this
Privacy Policy</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We may update Our
Privacy Policy from time to time. We will notify You of any changes by posting
the new Privacy Policy on this page.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>We will let You know
via email and/or a prominent notice on Our Service, prior to the change
becoming effective and update the &quot;Last updated&quot; date at the top of
this Privacy Policy.</span></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>You are advised to
review this Privacy Policy periodically for any changes. Changes to this
Privacy Policy are effective when they are posted on this page.</span></p>

<p class=MsoNormal style='line-height:36.0pt'><b><span
style='font-size:24.0pt;font-family:Helvetica;color:black'>Contact Us</span></b></p>

<p class=MsoNormal style='line-height:normal'><span
style='font-size:12.0pt;font-family:Helvetica;color:black'>If you have any
questions about this Privacy Policy, You can contact us:</span></p>

<ul type=disc>
 <li class=MsoNormal style='color:black;line-height:normal'><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica'>By email: </span><a href="mailto:toyboutiqueae@gmail.com"><span
     lang=RU style='font-size:12.0pt;font-family:Helvetica;color:black'>toyboutiqueae@gmail.com</span></a></li>
</ul>

<p class=MsoNormal><span lang=RU>&nbsp;</span></p>

</div>


`;
