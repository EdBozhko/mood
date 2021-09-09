import React, { FC } from 'react';
import { TeamMemberBackground, TeamMemberInfo, Name, Position, Telephone } from './TeamMember.styles';

interface TeamMemberProps {
  name: string;
  photoSrc: string;
  telephone: string;
  position: string;
}

const TeamMember: FC<TeamMemberProps> = ({ name, photoSrc, telephone, position }) => {
  return (
    <>
      <TeamMemberBackground photoSrc={photoSrc}>
        <TeamMemberInfo>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Telephone href={`tel: ${telephone}`}>{telephone}</Telephone>
        </TeamMemberInfo>
      </TeamMemberBackground>
    </>
  );
};
export default TeamMember;
