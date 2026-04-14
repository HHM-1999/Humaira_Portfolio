"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../app/favicon.ico"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <div className="logo-circle me-2"><Image src={logo} alt="Humaira Hossain" title="Humaira Hossain"></Image></div>
          <div>
            <div className="fw-bold text-white">Humaira Hossain Methela</div>
            <small className="text-muted">React & Next  js Developer</small>
          </div>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          ☰
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav nav-pill">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}