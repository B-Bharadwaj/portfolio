import {
  Avatar, Button, Column, Heading, Icon, IconButton,
  Tag, Text, Meta, Schema, Row, SmartLink, Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map((e) => e.company) },
    { title: about.technical.title, display: about.technical.display, items: about.technical.skills.map((s) => s.title) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map((i) => i.name) },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      {/* ── Sidebar at top ── */}
      {about.avatar.display && (
        <Column position="relative" paddingX="l" paddingBottom="m" gap="m" horizontal="start">
          <Row gap="24" vertical="center" wrap>
            <Column gap="4">
              <Text variant="heading-strong-m">{person.name}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">{person.role}</Text>
              <Row gap="8" vertical="center" paddingTop="4">
                <Icon onBackground="accent-weak" name="globe" />
                <Text variant="label-default-s" onBackground="neutral-weak">Bengaluru, India</Text>
              </Row>
            </Column>
            <Row gap="8" wrap vertical="center">
              <Button href="/resume.pdf" prefixIcon="download" label="Download CV" size="s" variant="primary" />
              {social.filter((item) => item.essential).map((item) =>
                item.link ? (
                  <IconButton key={item.name} href={item.link} icon={item.icon} variant="secondary" size="m" tooltip={item.name} />
                ) : null
              )}
            </Row>
          </Row>
        </Column>
      )}

      {/* ── Main content ── */}
      <Column paddingX="l">

        {/* Introduction */}
        <Column id={about.intro.title} fillWidth minHeight="160" vertical="center" marginBottom="32">
          <Heading className={styles.textAlign} variant="display-strong-xl">{person.name}</Heading>
          <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
            {person.role}
          </Text>
        </Column>

        {about.intro.display && (
          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="l">
            {about.intro.description}
          </Column>
        )}

        <Line marginBottom="40" />

        {/* Work Experience */}
        {about.work.display && (
          <>
            <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
              {about.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.work.experiences.map((experience, index) => (
                <Column key={`${experience.company}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4" wrap gap="8">
                    <Text id={experience.company} variant="heading-strong-l">{experience.company}</Text>
                    <Tag size="m">{experience.timeframe}</Tag>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column gap="12">
                    {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                      <Row key={i} gap="8" vertical="start">
                        <Icon name="arrowRight" size="xs" onBackground="neutral-weak" style={{ marginTop: 4, flexShrink: 0 }} />
                        <Text as="p" variant="body-default-m" onBackground="neutral-weak">{achievement}</Text>
                      </Row>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          </>
        )}

        <Line marginBottom="40" />

        {/* Technical Skills */}
        {about.technical.display && (
          <>
            <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="40">
              {about.technical.title}
            </Heading>
            <Column fillWidth gap="xl">
              {about.technical.skills.map((skill, index) => (
                <Column key={`${skill.title}-${index}`} fillWidth gap="8">
                  <Text id={skill.title} variant="heading-strong-l">{skill.title}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">{skill.description}</Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l">{tag.name}</Tag>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}

        <Line style={{ marginTop: "32px", marginBottom: "32px" }} />

        {/* Education & Certifications */}
        {about.studies.display && (
          <>
            <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
              {about.studies.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              <Column fillWidth gap="4">
                <Text variant="heading-strong-l">{about.studies.institutions[0].name}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {about.studies.institutions[0].description}
                </Text>
              </Column>
              <Line style={{ marginTop: "4px", marginBottom: "4px" }} />
              <Heading as="h3" variant="display-strong-xs" style={{ marginBottom: "8px" }}>
                Certifications
              </Heading>
              {about.studies.institutions.slice(1).map((institution, index) => (
                <Column key={index} fillWidth gap="4">
                  <Text variant="heading-strong-l">{institution.name}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}

        <Line style={{ marginTop: "32px", marginBottom: "32px" }} />

        {/* Get in touch */}
        <Column fillWidth gap="m" horizontal="center" align="center" paddingBottom="xl">
          <Heading as="h2" variant="display-strong-xs">Get in touch</Heading>
          <Text onBackground="neutral-weak" variant="body-default-m" align="center">
            Open to internships, full-time roles, and interesting projects.
          </Text>
          <Row gap="12" paddingTop="8" wrap horizontal="center">
            {social.filter((s) => s.essential).map((item) =>
              item.link ? (
                <Button key={item.name} href={item.link} prefixIcon={item.icon} label={item.name} size="m" variant="secondary" />
              ) : null
            )}
          </Row>
        </Column>

      </Column>
    </Column>
  );
}