"use client";

import { useState } from "react";
import { Column, Row, Tag, Text, Heading, SmartLink, Button } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

const filters = ["All", "AI / ML", "Backend", "Full Stack"];

const projects = [
  {
    slug: "rag-analytics-platform",
    title: "RAG Analytics Platform",
    summary: "Production-grade AI BI platform — hybrid FAISS + BM25 multi-PDF retrieval with a PostgreSQL Text-to-SQL pipeline.",
    tags: ["AI / ML", "Backend", "Full Stack"],
    tech: ["FastAPI", "FAISS", "BM25", "PostgreSQL", "React", "Plotly"],
    impact: "24 FastAPI endpoints",
    github: "https://github.com/B-Bharadwaj/RAG",
    images: [],
  },
  {
    slug: "claim-reimbursement-system",
    title: "Claim Reimbursement System",
    summary: "Full-stack Django + React reimbursement platform with 5-stage claim lifecycle, JWT auth, and OCR microservice.",
    tags: ["Backend", "Full Stack"],
    tech: ["Django", "React", "FastAPI", "Tesseract OCR", "PostgreSQL", "JWT"],
    impact: "5-stage automated workflow",
    github: "https://github.com/B-Bharadwaj/Claim-Reimbursement-System",
    images: [],
  },
  {
    slug: "alzheimers-parkinsons-protein-detection",
    title: "Alzheimer's & Parkinson's Protein Detection",
    summary: "BiLSTM + Luong Attention, CNN-BiLSTM, and Transformer classifiers on TAPE protein embeddings for neurodegenerative disease detection.",
    tags: ["AI / ML"],
    tech: ["PyTorch", "BiLSTM", "Transformer", "TAPE Embeddings"],
    impact: "82% accuracy, 3-class detection",
    github: "https://github.com/B-Bharadwaj/alzheimer-parkinson-detection",
    images: [],
  },
  {
    slug: "self-evolving-neural-network",
    title: "Self-Evolving Neural Network (SENN)",
    summary: "Evolutionary NAS framework with mutation-driven Architecture DNA and NSGA-II Pareto selection to auto-discover CNN architectures on CIFAR-10.",
    tags: ["AI / ML"],
    tech: ["PyTorch", "NSGA-II", "NAS", "Streamlit", "CIFAR-10"],
    impact: "Auto-discovered architectures",
    github: "https://github.com/B-Bharadwaj/SENN",
    images: [],
  },
  {
    slug: "medical-report-simplifier",
    title: "Medical Report Simplifier",
    summary: "PDF-to-plain-English pipeline using Gemini 2.5 Flash with a safety evaluation layer — reduces reading grade from 14–16 to 7–9.",
    tags: ["AI / ML", "Full Stack"],
    tech: ["Gemini 2.5 Flash", "NLP", "PDF Parsing", "Safety Evaluation"],
    impact: "100% negation safety",
    github: "https://github.com/B-Bharadwaj/Medical-Report-Simplifier",
    images: [],
  },
];

export function FilteredProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <Column fillWidth gap="xl">
      {/* Filter bar */}
      <Row gap="8" wrap paddingX="l">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              border: activeFilter === f ? "1.5px solid var(--brand-border-strong)" : "1px solid var(--neutral-border-medium)",
              background: activeFilter === f ? "var(--brand-background-weak)" : "transparent",
              color: activeFilter === f ? "var(--brand-on-background-strong)" : "var(--neutral-on-background-weak)",
              fontSize: 13,
              fontWeight: activeFilter === f ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
          >
            {f}
          </button>
        ))}
      </Row>

      {/* Project cards */}
      <Column fillWidth gap="xl" paddingX="l">
        {filtered.map((project) => (
          <Column key={project.slug} fillWidth gap="m">
            {/* Impact stat badge */}
            <Row gap="8" vertical="center">
              <Tag size="s" variant="brand">{project.impact}</Tag>
              {project.tags.map((t) => (
                <Tag key={t} size="s">{t}</Tag>
              ))}
            </Row>

            {/* Title + summary */}
            <Column gap="8">
              <Heading as="h2" variant="heading-strong-xl">
                <SmartLink href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
                  {project.title}
                </SmartLink>
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {project.summary}
              </Text>
            </Column>

            {/* Tech stack tags */}
            <Row wrap gap="8">
              {project.tech.map((t) => (
                <Tag key={t} size="m">{t}</Tag>
              ))}
            </Row>

            {/* Links */}
            <Row gap="16">
              <SmartLink href={`/work/${project.slug}`} suffixIcon="arrowRight">
                <Text variant="body-default-s">Read case study</Text>
              </SmartLink>
              <SmartLink href={project.github} suffixIcon="arrowUpRightFromSquare">
                <Text variant="body-default-s">GitHub</Text>
              </SmartLink>
            </Row>

            {/* Divider between cards */}
            <div style={{ height: 1, background: "var(--neutral-border-weak)", marginTop: 8 }} />
          </Column>
        ))}
      </Column>
    </Column>
  );
}
