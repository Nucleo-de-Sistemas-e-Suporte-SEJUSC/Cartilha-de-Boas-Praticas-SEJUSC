import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Allpages.css";


import Intro from "./Intro";
import Objetivo from "./Objetivo";
import Plano from "./Plano";
import Equip from "./Equip";
import Internet from "./Internet";
import Servers from "./Servers";
import Soft from "./Soft";
import Audit from "./Audit";
import Conclusion from "./Conclusion";
import Header from "../components/Header";

export default function AllPages() {
  const { hash, search } = useLocation();

  // 🔹 Scroll para hash
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  // 🔹 Highlight da pesquisa
  useEffect(() => {
    const params = new URLSearchParams(search);
    const query = params.get("q");
    if (!query) return;

    // Remove destaques antigos
    document.querySelectorAll("mark.highlight").forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize(); // junta nós de texto
    });

    // Destaca nova palavra
    const regex = new RegExp(`(${query})`, "gi");
    document.querySelectorAll("section").forEach((section) => {
      section.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          let lastIndex = 0;
          let match;
          while ((match = regex.exec(node.textContent)) !== null) {
            frag.appendChild(document.createTextNode(node.textContent.slice(lastIndex, match.index)));
            const mark = document.createElement("mark");
            mark.className = "highlight";
            mark.textContent = match[0];
            frag.appendChild(mark);
            lastIndex = match.index + match[0].length;
          }
          frag.appendChild(document.createTextNode(node.textContent.slice(lastIndex)));
          node.replaceWith(frag);
        }
      });
    });

    // Scroll até o primeiro destaque
    const first = document.querySelector("mark.highlight");
    if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [search]);

  return (
    <div className="all-pages">
      <section id="Header"><Header /></section>
      <section id="intro"><Intro /></section>
      <section id="objetivo"><Objetivo /></section>
      <section id="equip"><Equip /></section>
      <section id="soft"><Soft /></section>
      <section id="internet"><Internet /></section>
      <section id="servers"><Servers /></section>
      <section id="audit"><Audit /></section>
      <section id="conclusion"><Conclusion /></section>
      <section id="plano"><Plano /></section>
    </div>
  );
}
