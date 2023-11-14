import styled, { css } from "styled-components";

const SkillsComponent = styled.div<{ isActive: boolean }>`
  transition: 1s ease;
  margin-top: 20px;

  ${(props) =>
    props.isActive === true && css`
    transform: translateX(0)
  `}

  ${(props) => props.isActive === false && css`
    transform: translateX(100vw)
  `}
`;

const SkillsList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Skill = styled.p`
  font-style: italic;
  margin: 0;
`;

export function Skills(props: { isActive: boolean }) {
  return (
    <SkillsComponent {...props}>
      <h3>My technology stack: </h3>

      <SkillsList>
        <Skill>C#/.NET: ⭐⭐⭐⭐</Skill>
        <Skill>React: ⭐⭐⭐⭐</Skill>
        <Skill>JavaScript/TypeScript: ⭐⭐⭐⭐</Skill>
        <Skill>Node: ⭐⭐⭐⭐</Skill>
        <Skill>Flutter: ⭐⭐</Skill>
      </SkillsList>
    </SkillsComponent>
  );
}
