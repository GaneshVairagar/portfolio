import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiHeroku, SiGit, SiJava } from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoGithub,
  IoLogoCss3,
  IoLogoVue
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={12}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
    </Stack>
  );
};

const About = () => {
  return (
    <Container className="reveal" id="about" maxW={"5xl"} py={12} isLazy>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About Me
          </Text>
          <Heading>
            <Text>Hello..! My name is Ganesh Vairagar</Text>
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          I'm a tone- tutored programmer with a passion for literacy and exploring new technologies. 
          I've a strong background in full- mound development and am always eager to expand my skillset 
          and take on new challenges. In my free time, I enjoy belting on a mug of tea( or coffee) and 
          watching a game of justice. As a devoted and driven individual, I'm constantly seeking out openings 
          to grow and ameliorate as a programmer.
          </Text>
          <Text color={"gray.500"} fontSize={"md"}>
            Some of the Stack I know
          </Text>
          <Stack spacing={8} direction={"row"}>
            <Feature
              icon={
                <Icon
                  as={IoLogoReact}
                  color={useColorModeValue("blue.200", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoVue}
                  color={useColorModeValue("green.500", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoPython}
                  color={useColorModeValue("blue.200", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoNodejs}
                  color={useColorModeValue("green.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "green.900")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoJavascript}
                  color={useColorModeValue("yellow.300", "yellow.400")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />

            <Feature
              icon={
                <Icon
                  as={TbBrandNextjs}
                  color={useColorModeValue("white", "black")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            
          </Stack>
          <Stack spacing={8} direction={"row"}>
            <Feature
              icon={
                <Icon
                  as={IoLogoHtml5}
                  color={useColorModeValue("red.300", "red.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiExpress}
                  color={useColorModeValue("white", "blue.600")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoGithub}
                  color={useColorModeValue("white", "blue.700")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiHeroku}
                  color={useColorModeValue("white", "blue.700")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiGit}
                  color={useColorModeValue("red", "red.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={IoLogoCss3}
                  color={useColorModeValue("blue.200", "blue.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
          </Stack>
          <Stack spacing={8} direction={"row"}>
            <Feature
              icon={
                <Icon
                  as={SiJava}
                  color={useColorModeValue("white", "red.500")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
            <Feature
              icon={
                <Icon
                  as={SiMongodb}
                  color={useColorModeValue("green.500", "green.300")}
                  w={12}
                  h={10}
                />
              }
              iconBg={useColorModeValue("black", "white")}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            width={"100%"}
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default About;
