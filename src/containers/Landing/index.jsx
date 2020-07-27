import React from "react";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import ContactPage from "./Contact";
import AboutPage from "./About";
import MarketsPage from "./Markets";
import HomePage from "./Home";
import RecoverPage from "./Hidden/Recover";
import VerifyPage from "./Hidden/Verify";
import PrivacyPage from "./Hidden/Privacy";

export const SignUp = () => <SignUpPage/>;
export const SignIn = () => <SignInPage/>;
export const Contact = () => <ContactPage/>;
export const About = () => <AboutPage/>;
export const Markets = () => <MarketsPage/>;
export const Home = () =>  <HomePage/>;

export const Recover = () => <RecoverPage/>;
export const Verify = () => <VerifyPage/>;
export const Privacy = () => <PrivacyPage/>;
