import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import Seo from "../components/seo"

const OurJob = () => (
  <Layout>
    <Seo
      title="Notre métier"
      description="Chez consultations 7 sur 7, notre métier c'est de vous proposer des consultations pour adultes et enfants, sans rendez-vous, 
      avec la possibilité d'effectuer des examens complémentaires pouvant être réalisé sur place"
      path="notre-metier"
    />
    <PagesHeader title="Notre Métier" />
    <div className="our-job-section">
      <div className="our-job-resume">
        <div className="part-one">
          <div className="our-job-img">
            <StaticImage
              width={350}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../assets/images/ourJobs/our-job-2.jpg"
              alt="Docteur qui soigne un patient"
            />
          </div>
          <div className="our-job-text">
            <p>
              {" "}
              Nous effectuons des consultations sans rendez-vous pour vous
              prendre en charge.
              <br></br>
              <br></br>
              Si besoin, nous pouvons vous proposer d'effectuer des examens
              d'imagerie médicale ou de biologie médicale pouvant être réalisé
              sur place.
            </p>
          </div>
        </div>
        <div className="part-two">
          <div className="our-job-text">
            <p>
              <span>- Médecine générale</span>
              <br></br>
              <span>- Médecine d'urgence</span>
              <br></br>
              <span>- Gérontologie</span>
              <br></br>
              <span>- Pédiatrie</span>
              <br></br>
              <span>- Suture de plaie</span>
              <br></br>
              <span>- Entorse et fracture</span>
              <br></br>
            </p>
          </div>
          <div className="our-job-img">
            <StaticImage
              width={350}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../assets/images/ourJobs/our-job-9.jpg"
              alt="Docteur qui prescrit une ordonnance"
            />
          </div>
        </div>
        <div className="part-three">
          <div className="our-job-img">
            <StaticImage
              width={350}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../assets/images/ourJobs/our-job-6.jpg"
              alt="Salle de soins"
            />
          </div>
          <div className="our-job-text">
            <p>
              Nous pouvons vous orienter vers notre réseau de spécialistes pour
              complèter la prise en charge pour des avis complémentaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default OurJob
