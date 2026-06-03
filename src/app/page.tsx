import {
  Heading, Text, Button, Avatar, RevealFx, Column, Row,
  Schema, Meta, Tag, Line, Icon, SmartLink,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const skills = {
  "Backend": ["Python", "Django", "FastAPI", "PostgreSQL", "REST API", "AWS"],
  "AI / ML": ["PyTorch", "TensorFlow", "RAG Systems", "LLM Integration", "NLP", "Computer Vision"],
  "Frontend": ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
};

const experiences = [
  {
    company: "Happiest Minds Technologies",
    role: "GenAI Intern",
    timeframe: "Mar 2026 – May 2026",
    points: [
  "Built a production-grade RAG Analytics Platform with hybrid FAISS + BM25 retrieval across multiple PDFs and a PostgreSQL Text-to-SQL pipeline, exposed via 24 FastAPI endpoints with built-in LLM evaluation metrics for response quality monitoring.",
  "Developed a React + Plotly frontend with role-aware query routing, enabling non-technical stakeholders to query both structured and unstructured data sources through a single unified interface.",
],
  },
  {
    company: "Innoventes",
    role: "Software Developer Intern",
    timeframe: "Jul 2025 – Mar 2026",
    points: [
  "Built an end-to-end Claim Reimbursement System in Django and PostgreSQL with a 5-stage automated claim lifecycle, integrating a FastAPI + Tesseract OCR microservice that extracts vendor, date, and amount from receipts into structured JSON.",
  "Designed and deployed REST APIs with role-based access control across 3 user roles — Employee, Manager, and Finance — streamlining approval workflows and reducing unauthorised access risk.",
],
  },
];

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── HERO ── */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center" paddingBottom="8">
            <Row gap="12" wrap horizontal="center">
              {social.filter((s) => s.essential).map((item) =>
                item.link ? (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="m"
                    weight="default"
                    variant="secondary"
                  />
                ) : null
              )}
            </Row>
          </RevealFx>
          <RevealFx delay={0.5} horizontal="center" paddingTop="12">
            <Button
              href={about.path}
              variant="primary"
              size="m"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingX="4">
                
                View full CV
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

    
      <Line />

      {/* ── SKILLS ── */}
      <RevealFx delay={0.1} fillWidth>
        <Column fillWidth gap="l" paddingX="l">
          <Heading as="h2" variant="display-strong-xs">Tech Stack</Heading>
          <Column gap="m" fillWidth>
            {Object.entries(skills).map(([category, items]) => (
              <Row key={category} gap="16" vertical="start" fillWidth s={{ direction: "column" }}>
                <Text
                  variant="label-strong-s"
                  onBackground="neutral-weak"
                  style={{ minWidth: 80 }}
                >
                  {category}
                </Text>
                <Row wrap gap="8">
                  {items.map((skill) => (
                    <Tag key={skill} size="m">{skill}</Tag>
                  ))}
                </Row>
              </Row>
            ))}
          </Column>
        </Column>
      </RevealFx>

      <Line />

      {/* ── EXPERIENCE ── */}
      <RevealFx delay={0.1} fillWidth>
        <Column fillWidth gap="l" paddingX="l">
          <Row fillWidth horizontal="between" vertical="center">
            <Heading as="h2" variant="display-strong-xs">Experience</Heading>
            <SmartLink href={about.path} suffixIcon="arrowRight">
              <Text variant="body-default-s">Full CV</Text>
            </SmartLink>
          </Row>
          <Column gap="xl" fillWidth>
            {experiences.map((exp, i) => (
              <Column key={i} fillWidth gap="8">
                <Row fillWidth horizontal="between" vertical="end" wrap gap="8">
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-l">{exp.company}</Heading>
                    <Text variant="body-default-s" onBackground="brand-weak">{exp.role}</Text>
                  </Column>
                  <Text variant="label-default-s" onBackground="neutral-weak">{exp.timeframe}</Text>
                </Row>
                <Column as="ul" gap="8" paddingTop="4">
                  {exp.points.map((pt, j) => (
                    <Row key={j} gap="8" vertical="start">
                      <Icon name="arrowRight" size="xs" onBackground="neutral-weak" style={{ marginTop: 3, flexShrink: 0 }} />
                      <Text as="p" variant="body-default-s" onBackground="neutral-weak">{pt}</Text>
                    </Row>
                  ))}
                </Column>
              </Column>
            ))}
          </Column>
        </Column>
      </RevealFx>

      <Line />

      {/* ── FEATURED PROJECTS ── */}
      <RevealFx delay={0.1} fillWidth>
        <Column fillWidth gap="l" paddingX="l">
          <Row fillWidth horizontal="between" vertical="center">
            <Heading as="h2" variant="display-strong-xs">Featured Projects</Heading>
            <SmartLink href="/work" suffixIcon="arrowRight">
              <Text variant="body-default-s">All projects</Text>
            </SmartLink>
          </Row>
        </Column>
      </RevealFx>
      <Projects range={[1, 3]} />

      <Line />

      {/* ── CONTACT ── */}
      <RevealFx delay={0.1} fillWidth>
        <Column fillWidth gap="m" paddingX="l" horizontal="center" align="center" paddingBottom="xl">
          <Heading as="h2" variant="display-strong-xs">Get in touch</Heading>
          <Text onBackground="neutral-weak" variant="body-default-m" align="center">
            Open to internships, full-time roles, and interesting projects.
          </Text>
          <Row gap="12" paddingTop="8" wrap horizontal="center">
            {social.filter((s) => s.essential).map((item) =>
              item.link ? (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="m"
                  variant="secondary"
                />
              ) : null
            )}
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
