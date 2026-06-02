import { Column, Heading, Text, Meta, Schema, Row, Button, Line } from "@once-ui-system/core";
import { baseURL, about, person, work, social } from "@/resources";
import { FilteredProjects } from "@/components/work/FilteredProjects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="8" paddingX="l">
        <Heading variant="display-strong-l">Projects</Heading>
        <Text onBackground="neutral-weak" variant="body-default-l">
          A mix of AI systems, backend platforms, and full-stack applications.
        </Text>
      </Column>

      <FilteredProjects />

      <Line />

      {/* Get in touch */}
      <Column fillWidth gap="m" horizontal="center" align="center" paddingBottom="xl" paddingX="l">
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
  );
}