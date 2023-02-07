import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  Wrap,
} from '@chakra-ui/react';
import { SiAdobeaudition } from 'react-icons/si';
import { SiAdobedreamweaver } from 'react-icons/si';
import { SiAdobeindesign } from 'react-icons/si';
import { SiAbstract } from 'react-icons/si';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const CompaniesBox = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  const Avatars = [
    {
      nam: 'Ryan Florence',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Segun Adebayo',
      src: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Prosper Otemuyiwa',
      src: 'https://bit.ly/prosper-baba',
    },
    {
      name: 'Christian Nwamba',
      src: 'https://bit.ly/code-beast',
    },
  ];

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '40%' : '100%'}
      // width="40%"
      ml="0"
      mb="4"
    >
      <TableContainer>
        <Table size="sm">
          <TableCaption>Top 4 Companies</TableCaption>
          <Thead>
            <Tr>
              <Th>COMPANIES</Th>
              <Th>MEMBERS</Th>
              <Th>BUDGET</Th>
              <Th>COMPLETION</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td style={{ width: '200px' }}>
                <SiAdobeaudition style={{ display: 'inline' }} />
                <span style={{ paddingLeft: '5px' }}>
                  Add the New Pricing Page
                </span>
              </Td>
              <Td style={{ width: '150px' }}>
                <AvatarGroup size="md" max={4}>
                  {Avatars.map(avatar => (
                    <Wrap>
                      <Avatar
                        name={avatar.name}
                        src={avatar.src}
                        size="sm"
                        key={avatar.name}
                      />
                    </Wrap>
                  ))}
                </AvatarGroup>
              </Td>

              <Td style={{ width: '140px' }}>$14,000</Td>
              <Td style={{ width: '150px' }}>
                <Progress hasStripe value={64} />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <SiAdobedreamweaver style={{ display: 'inline' }} />
                <span style={{ paddingLeft: '5px' }}>Add Progress Track</span>
              </Td>
              <Td>
                <AvatarGroup size="md" max={4}>
                  {Avatars.map(avatar => (
                    <Wrap>
                      <Avatar name={avatar.name} src={avatar.src} size="sm" />
                    </Wrap>
                  ))}
                </AvatarGroup>
              </Td>
              <Td>$14,000</Td>
              <Td>
                <Progress hasStripe value={25} />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <SiAdobeindesign style={{ display: 'inline' }} />
                <span style={{ paddingLeft: '5px' }}>Fix Platform Errors</span>
              </Td>
              <Td>
                <AvatarGroup size="md" max={4}>
                  {Avatars.map(avatar => (
                    <Wrap>
                      <Avatar name={avatar.name} src={avatar.src} size="sm" />
                    </Wrap>
                  ))}
                </AvatarGroup>
              </Td>
              <Td>$14,000</Td>
              <Td>
                <Progress hasStripe value={80} />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>
                <SiAbstract style={{ display: 'inline' }} />
                <span style={{ paddingLeft: '5px' }}>
                  Launch our Mobile App
                </span>
              </Td>
              <Td>
                <AvatarGroup size="md" max={4}>
                  {Avatars.map(avatar => (
                    <Wrap>
                      <Avatar name={avatar.name} src={avatar.src} size="sm" />
                    </Wrap>
                  ))}
                </AvatarGroup>
              </Td>
              <Td>$14,000</Td>
              <Td>
                <Progress hasStripe value={89} />
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CompaniesBox;
