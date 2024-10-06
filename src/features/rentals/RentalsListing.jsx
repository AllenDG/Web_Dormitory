import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { priceFormatter } from "../../utils/priceFormatter";
import {
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Tag,
  TagLabel,
  TagRightIcon,
  Divider,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
import { amenityIcons } from "../../utils/amenityIcon";
import rentalListings from "../../data/rentalListing.json";
import amenities from "../../data/amenities.json";


export default function RentalsListing() {
  const bgColor = useColorModeValue("bg.light", "bg.dark");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const filteredListings = useMemo(() => {
    return rentalListings.filter((listing) =>
      selectedAmenities.every((amenity) => listing.amenities.includes(amenity))
    );
  }, [selectedAmenities]);

  const handleAmenityClick = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <>
      <LightMode>
        <Wrap spacing="10px" align="center" justify="center">
          {amenities.map((amenity) => (
            <WrapItem key={amenity}>
              <Tag
                size="lg"
                colorScheme="primary"
                borderRadius="full"
                onClick={() => handleAmenityClick(amenity)}
                variant={
                  selectedAmenities.includes(amenity) ? "solid" : "outline"
                }
              >
                <TagLabel>{amenity}</TagLabel>
                <TagRightIcon as={amenityIcons[amenity]} />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </LightMode>

      <Divider my="20px" />

      <Wrap spacing="10px" align="center" justify="center">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <WrapItem key={listing.id}>
              <Link to={`/listing/${listing.id}`}>
                <Center maxW="300px" h="auto">
                  <Card maxW="sm" bg={bgColor}>
                    <CardBody>
                      <Image
                        src={listing.imageUrl[0]}
                        alt={listing.title}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md" noOfLines={1}>
                          {listing.title}
                        </Heading>
                        <Text noOfLines={2}>{listing.description}</Text>
                        <Heading
                          color="primary.500"
                          as="h4"
                          fontSize="lg"
                          noOfLines={1}
                        >
                          {priceFormatter(listing.price)} monthly
                        </Heading>
                      </Stack>
                    </CardBody>
                  </Card>
                </Center>
              </Link>
            </WrapItem>
          ))
        ) : (
          <Text>No rentals match the selected amenities.</Text>
        )}
      </Wrap>
    </>
  );
}
