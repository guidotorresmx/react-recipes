import { Routes, Route, Link } from "react-router-dom";
import "./css/Nav.css";
import "./css/background.css";
import "./css/defaults.css";
import "./css/about.css";
import ".//css/index.css";
import logo from "./media/logo.svg";

function About() {
  return (
    <main className="about-page is-flex is-align-items-center content is-full-height">
      <div className="container is-max-widescreen px-2">
        <div className="columns is-marginless">
          <aside className="column is-4 is-flex is-flex-direction-column is-justify-content-center">
            <img
              className="js-img-fadeIn center-img"
              src="./react-website/about.jpg"
            />
          </aside>
          <section className="column is-8 is-flex is-flex-direction-column is-justify-content-center">
            <h2 className="about-title">About</h2>
            <article>
              <h1 id="Marco-Guido-Full-stack-dev">
                <a
                  className="headerlink"
                  href="#Marco-Guido-Full-stack-dev"
                  title="Marco Guido | Full-stack dev"
                ></a>
                Marco Guido | Full-stack dev
              </h1>
              <p>
                Hi, this is Marco, part-time sleeper, full-time pesimist and
                casual programmer, experienced full-stack dev with a solid
                machine learning foundation.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://img.shields.io/badge/-FFF?&amp;logo=mouse"
                >
                  blog &#x1F5B1;&#xFE0F;&#x1F4BB;
                </a>
                |
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://twitter.com/guidotorresmx"
                >
                  twitter &#x1F424;&#x2712;&#xFE0F;
                </a>
                |
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://github.com/guidotorresmx"
                >
                  github &#x1F408;&zwj;&#x2B1B;&#x1F419;
                </a>
                |
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://www.instagram.com/guidotorresmx"
                >
                  instagram &#x1F933;
                </a>
                |
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://www.linkedin.com/in/guidotorresmx"
                >
                  linkedin &#x1F578;&#xFE0F;&#x1F9D1;&zwj;&#x1F4BB;
                </a>
                |
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://www.facebook.com/guidotorresmx"
                >
                  facebook &#x1F642;&#x1F4D5;
                </a>
                | <a href="marco@guidotorres.mx">email &#x1F4E7;</a> |
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://t.me/guidotorresmx"
                >
                  telegram &#x1F4E4;&#x2708;&#xFE0F;
                </a>
              </p>
              <h3 id="Languages-and-extras">
                <a
                  className="headerlink"
                  href="#Languages-and-extras"
                  title="Languages and extras"
                ></a>
                Languages and extras
              </h3>
              <p>
                <img
                  src="https://img.shields.io/badge/-C%23-FFF?&amp;logo=Csharp&amp;logoColor=black"
                  alt="CSharp"
                  title="C#"
                />
                <img
                  src="https://img.shields.io/badge/-CSS-FFF?&amp;logo=CSS"
                  alt="CSS"
                  title="CSS"
                />
                <img
                  src="https://img.shields.io/badge/-JavaScript-FFF?&amp;logo=JavaScript"
                  alt="JavaScript"
                  title="JavaScript"
                />
                <img
                  src="https://img.shields.io/badge/-HTML-FFF?&amp;logo=HTML"
                  alt="HTML"
                  title="HTML"
                />
                <img
                  src="https://img.shields.io/badge/-Python-FFF?&amp;logo=Python"
                  alt="Python"
                  title="Python"
                />
                <img
                  src="https://img.shields.io/badge/-Matlab-FFF?&amp;logo=Matlab"
                  alt="Matlab"
                  title="Matlab"
                />
              </p>
              <h3 id="Technologies">
                <a
                  className="headerlink"
                  href="#Technologies"
                  title="Technologies"
                ></a>
                Technologies
              </h3>
              <p>
                <img
                  src="https://img.shields.io/badge/-AWS-FFF?&amp;logo=Amazon-AWS&amp;logoColor=blue"
                  alt="AWS"
                  title="AWS"
                />
                <img
                  src="https://img.shields.io/badge/-Azure-FFF?&amp;logo=azure-devops"
                  alt="Azure"
                  title="Azure"
                />
                <img
                  src="https://img.shields.io/badge/-Docker-FFF?&amp;logo=Docker"
                  alt="Docker"
                  title="Docker"
                />
                <img
                  src="https://img.shields.io/badge/-Kubernetes-FFF?&amp;logo=Kubernetes"
                  alt="Kubernetes"
                  title="Kubernetes"
                />
                <img
                  src="https://img.shields.io/badge/-Linux-FFF?&amp;logo=Linux"
                  alt="Linux"
                  title="Linux"
                />
                <img
                  src="https://img.shields.io/badge/-Node.js-FFF?&amp;logo=node.js"
                  alt="Node.js"
                  title="Node"
                />
                <img
                  src="https://img.shields.io/badge/-Redis-FFF?&amp;logo=Redis"
                  alt="Redis"
                  title="Redis"
                />
                <img
                  src="https://img.shields.io/badge/-MongoDB-FFF?&amp;logo=MongoDB"
                  alt="MongoDB"
                  title="MongoDB"
                />
                <img
                  src="https://img.shields.io/badge/-PostgreSQL-FFF?&amp;logo=PostgreSQL"
                  alt="PostgreSQL"
                  title="PostgreSQL"
                />
                <img
                  src="https://img.shields.io/badge/-TensorFlow-FFF?&amp;logo=TensorFlow"
                  alt="TensorFlow"
                  title="TensorFlow"
                />
              </p>
              <h3 id="Interests">
                <a
                  className="headerlink"
                  href="#Interests"
                  title="Interests"
                ></a>
                Interests
              </h3>
              <p>Machine Learning, microservice, CI/CD, WebApps.</p>
              <h3 id="Tools-I-use">
                <a
                  className="headerlink"
                  href="#Tools-I-use"
                  title="Tools I use"
                ></a>
                Tools I use
              </h3>
              <ul>
                <li>atom (hydrogen)</li>
                <li>vscode (dotnet tools)</li>
                <li>linux (pop-os fan)</li>
                <li>Win + WSL (best of both worlds)</li>
                <li>zsh + powerlevel9k (feeling fancy)</li>
                <li>multidesktop</li>
                <li>botframework (emulator, no composer)</li>
                <li>ngrok</li>
                <li>postman</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;
