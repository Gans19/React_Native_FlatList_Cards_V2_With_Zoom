import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
} from "react-native";
import { Avatar, Button, Card, PaperProvider, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// This content for CARD content
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// This is our Data

const data = [
  {
    id: "1",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/700",
  },
  {
    id: "2",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/701",
  },
  {
    id: "3",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/703",
  },
  {
    id: "4",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/704",
  },
  {
    id: "5",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/705",
  },
  {
    id: "6",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/706",
  },
  {
    id: "7",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/707",
  },
  {
    id: "8",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/708",
  },
  {
    id: "9",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/709",
  },
  {
    id: "10",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/710",
  },
  {
    id: "11",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/711",
  },
  {
    id: "12",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/712",
  },
  {
    id: "13",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/713",
  },
  {
    id: "14",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/714",
  },
  {
    id: "15",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/715",
  },
  {
    id: "16",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/716",
  },
  {
    id: "17",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/717",
  },
  {
    id: "18",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/718",
  },
  {
    id: "19",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/719",
  },
  {
    id: "20",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/720",
  },
  {
    id: "21",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/721",
  },
  {
    id: "22",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/722",
  },
  {
    id: "23",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/723",
  },
  {
    id: "24",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/724",
  },
  {
    id: "25",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/725",
  },
  {
    id: "26",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/726",
  },
  {
    id: "27",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/727",
  },
  {
    id: "28",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/728",
  },
  {
    id: "29",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/729",
  },
  {
    id: "30",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/730",
  },
  {
    id: "31",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/731",
  },
  {
    id: "32",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/732",
  },
  {
    id: "33",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/733",
  },
  {
    id: "34",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/734",
  },
  {
    id: "35",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/735",
  },
  {
    id: "36",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/736",
  },
  {
    id: "37",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/737",
  },
  {
    id: "38",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/738",
  },
  {
    id: "39",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/739",
  },
  {
    id: "40",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/740",
  },
  {
    id: "41",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "42",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "43",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "44",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "45",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "46",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "47",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "48",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "49",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "50",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "51",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "52",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "53",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "54",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "55",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "56",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "57",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "58",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "59",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "60",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "61",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "62",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "63",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "64",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "65",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "66",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "67",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "68",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "69",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "70",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "71",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "72",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "73",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "74",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "75",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "76",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "77",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "78",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "79",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "80",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "81",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "82",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "83",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "84",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "85",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "86",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "87",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "88",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "89",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "90",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "91",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "92",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "93",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "94",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "95",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "96",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "97",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "98",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "99",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "100",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "101",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "102",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "103",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "104",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "105",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "106",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "107",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "108",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "109",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "110",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "111",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "112",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "113",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "114",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "115",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "116",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "117",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "118",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "119",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "120",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "121",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "122",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "123",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "124",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "125",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "126",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "127",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "128",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "129",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "130",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "131",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "132",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "133",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "134",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "135",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "136",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "137",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "138",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "139",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "140",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
  {
    id: "141",
    title: "Card Title 1",
    subtitle: "Card Subtitle 1",
    content: "Card content 1",
    imageUri: "https://picsum.photos/741",
  },
  {
    id: "142",
    title: "Card Title 2",
    subtitle: "Card Subtitle 2",
    content: "Card content 2",
    imageUri: "https://picsum.photos/742",
  },
  {
    id: "143",
    title: "Card Title 3",
    subtitle: "Card Subtitle 3",
    content: "Card content 3",
    imageUri: "https://picsum.photos/743",
  },
  {
    id: "144",
    title: "Card Title 4",
    subtitle: "Card Subtitle 4",
    content: "Card content 4",
    imageUri: "https://picsum.photos/744",
  },
  {
    id: "145",
    title: "Card Title 5",
    subtitle: "Card Subtitle 5",
    content: "Card content 5",
    imageUri: "https://picsum.photos/745",
  },
  {
    id: "146",
    title: "Card Title 6",
    subtitle: "Card Subtitle 6",
    content: "Card content 6",
    imageUri: "https://picsum.photos/746",
  },
  {
    id: "147",
    title: "Card Title 7",
    subtitle: "Card Subtitle 7",
    content: "Card content 7",
    imageUri: "https://picsum.photos/747",
  },
  {
    id: "148",
    title: "Card Title 8",
    subtitle: "Card Subtitle 8",
    content: "Card content 8",
    imageUri: "https://picsum.photos/748",
  },
  {
    id: "149",
    title: "Card Title 9",
    subtitle: "Card Subtitle 9",
    content: "Card content 9",
    imageUri: "https://picsum.photos/749",
  },
  {
    id: "150",
    title: "Card Title 10",
    subtitle: "Card Subtitle 10",
    content: "Card content 10",
    imageUri: "https://picsum.photos/750",
  },
];

const Cards = () => {
  // Here we create navigation
  const navigation = useNavigation();

  //Button navigation
  const goToDetails = (item) => {
    navigation.navigate("Details", { item });
  };

  // FlatList Passed data => here render function
  const renderItem = ({ item }) => (
    // Card Container This was a Package
    <Card style={{ marginBottom: 15 }}>
      <Card.Title
        title={item.title}
        subtitle={item.subtitle}
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium">{item.content}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: item.imageUri }} />
      <Card.Actions>
        <Button onPress={() => goToDetails(item)}>View</Button>
      </Card.Actions>
    </Card>
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      {/* FlatList Need a seperate Key and Value */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Cards;

// If you want to customize  the cards in VirtualizedList then Its there =>

// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   VirtualizedList,
// } from "react-native";
// import { Avatar, Button, Card, PaperProvider, Text } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// import data from the Array

// const getItemCount = (data) => data.length;

// const getItem = (data, index) => data[index];

// This is our Data

// const data = [
//   {
//     id: "1",
//     title: "Card Title 1",
//     subtitle: "Card Subtitle 1",
//     content: "Card content 1",
//     imageUri: "https://picsum.photos/700",
//   },
//   {
//     id: "2",
//     title: "Card Title 2",
//     subtitle: "Card Subtitle 2",
//     content: "Card content 2",
//     imageUri: "https://picsum.photos/701",
//   },
//   {
//     id: "3",
//     title: "Card Title 3",
//     subtitle: "Card Subtitle 3",
//     content: "Card content 3",
//     imageUri: "https://picsum.photos/703",
//   },
//   {
//     id: "4",
//     title: "Card Title 4",
//     subtitle: "Card Subtitle 4",
//     content: "Card content 4",
//     imageUri: "https://picsum.photos/704",
//   },
//   {
//     id: "5",
//     title: "Card Title 5",
//     subtitle: "Card Subtitle 5",
//     content: "Card content 5",
//     imageUri: "https://picsum.photos/705",
//   },
//   {
//     id: "6",
//     title: "Card Title 6",
//     subtitle: "Card Subtitle 6",
//     content: "Card content 6",
//     imageUri: "https://picsum.photos/706",
//   },
//   {
//     id: "7",
//     title: "Card Title 7",
//     subtitle: "Card Subtitle 7",
//     content: "Card content 7",
//     imageUri: "https://picsum.photos/707",
//   },
//   {
//     id: "8",
//     title: "Card Title 8",
//     subtitle: "Card Subtitle 8",
//     content: "Card content 8",
//     imageUri: "https://picsum.photos/708",
//   },
//   {
//     id: "9",
//     title: "Card Title 9",
//     subtitle: "Card Subtitle 9",
//     content: "Card content 9",
//     imageUri: "https://picsum.photos/709",
//   },
//   {
//     id: "10",
//     title: "Card Title 10",
//     subtitle: "Card Subtitle 10",
//     content: "Card content 10",
//     imageUri: "https://picsum.photos/710",
//   },
//   {
//     id: "11",
//     title: "Card Title 1",
//     subtitle: "Card Subtitle 1",
//     content: "Card content 1",
//     imageUri: "https://picsum.photos/711",
//   },
//   {
//     id: "12",
//     title: "Card Title 2",
//     subtitle: "Card Subtitle 2",
//     content: "Card content 2",
//     imageUri: "https://picsum.photos/712",
//   },
//   {
//     id: "13",
//     title: "Card Title 3",
//     subtitle: "Card Subtitle 3",
//     content: "Card content 3",
//     imageUri: "https://picsum.photos/713",
//   },
//   {
//     id: "14",
//     title: "Card Title 4",
//     subtitle: "Card Subtitle 4",
//     content: "Card content 4",
//     imageUri: "https://picsum.photos/714",
//   },
//   {
//     id: "15",
//     title: "Card Title 5",
//     subtitle: "Card Subtitle 5",
//     content: "Card content 5",
//     imageUri: "https://picsum.photos/715",
//   },
//   {
//     id: "16",
//     title: "Card Title 6",
//     subtitle: "Card Subtitle 6",
//     content: "Card content 6",
//     imageUri: "https://picsum.photos/716",
//   },
//   {
//     id: "17",
//     title: "Card Title 7",
//     subtitle: "Card Subtitle 7",
//     content: "Card content 7",
//     imageUri: "https://picsum.photos/717",
//   },
//   {
//     id: "18",
//     title: "Card Title 8",
//     subtitle: "Card Subtitle 8",
//     content: "Card content 8",
//     imageUri: "https://picsum.photos/718",
//   },
//   {
//     id: "19",
//     title: "Card Title 9",
//     subtitle: "Card Subtitle 9",
//     content: "Card content 9",
//     imageUri: "https://picsum.photos/719",
//   },
//   {
//     id: "20",
//     title: "Card Title 10",
//     subtitle: "Card Subtitle 10",
//     content: "Card content 10",
//     imageUri: "https://picsum.photos/720",
//   },
//   {
//     id: "21",
//     title: "Card Title 1",
//     subtitle: "Card Subtitle 1",
//     content: "Card content 1",
//     imageUri: "https://picsum.photos/721",
//   },
//   {
//     id: "22",
//     title: "Card Title 2",
//     subtitle: "Card Subtitle 2",
//     content: "Card content 2",
//     imageUri: "https://picsum.photos/722",
//   },
//   {
//     id: "23",
//     title: "Card Title 3",
//     subtitle: "Card Subtitle 3",
//     content: "Card content 3",
//     imageUri: "https://picsum.photos/723",
//   },
//   {
//     id: "24",
//     title: "Card Title 4",
//     subtitle: "Card Subtitle 4",
//     content: "Card content 4",
//     imageUri: "https://picsum.photos/724",
//   },
//   {
//     id: "25",
//     title: "Card Title 5",
//     subtitle: "Card Subtitle 5",
//     content: "Card content 5",
//     imageUri: "https://picsum.photos/725",
//   },
//   {
//     id: "26",
//     title: "Card Title 6",
//     subtitle: "Card Subtitle 6",
//     content: "Card content 6",
//     imageUri: "https://picsum.photos/726",
//   },
//   {
//     id: "27",
//     title: "Card Title 7",
//     subtitle: "Card Subtitle 7",
//     content: "Card content 7",
//     imageUri: "https://picsum.photos/727",
//   },
//   {
//     id: "28",
//     title: "Card Title 8",
//     subtitle: "Card Subtitle 8",
//     content: "Card content 8",
//     imageUri: "https://picsum.photos/728",
//   },
//   {
//     id: "29",
//     title: "Card Title 9",
//     subtitle: "Card Subtitle 9",
//     content: "Card content 9",
//     imageUri: "https://picsum.photos/729",
//   },
//   {
//     id: "30",
//     title: "Card Title 10",
//     subtitle: "Card Subtitle 10",
//     content: "Card content 10",
//     imageUri: "https://picsum.photos/730",
//   },
//   {
//     id: "31",
//     title: "Card Title 1",
//     subtitle: "Card Subtitle 1",
//     content: "Card content 1",
//     imageUri: "https://picsum.photos/731",
//   },
//   {
//     id: "32",
//     title: "Card Title 2",
//     subtitle: "Card Subtitle 2",
//     content: "Card content 2",
//     imageUri: "https://picsum.photos/732",
//   },
//   {
//     id: "33",
//     title: "Card Title 3",
//     subtitle: "Card Subtitle 3",
//     content: "Card content 3",
//     imageUri: "https://picsum.photos/733",
//   },
//   {
//     id: "34",
//     title: "Card Title 4",
//     subtitle: "Card Subtitle 4",
//     content: "Card content 4",
//     imageUri: "https://picsum.photos/734",
//   },
//   {
//     id: "35",
//     title: "Card Title 5",
//     subtitle: "Card Subtitle 5",
//     content: "Card content 5",
//     imageUri: "https://picsum.photos/735",
//   },
//   {
//     id: "36",
//     title: "Card Title 6",
//     subtitle: "Card Subtitle 6",
//     content: "Card content 6",
//     imageUri: "https://picsum.photos/736",
//   },
//   {
//     id: "37",
//     title: "Card Title 7",
//     subtitle: "Card Subtitle 7",
//     content: "Card content 7",
//     imageUri: "https://picsum.photos/737",
//   },
//   {
//     id: "38",
//     title: "Card Title 8",
//     subtitle: "Card Subtitle 8",
//     content: "Card content 8",
//     imageUri: "https://picsum.photos/738",
//   },
//   {
//     id: "39",
//     title: "Card Title 9",
//     subtitle: "Card Subtitle 9",
//     content: "Card content 9",
//     imageUri: "https://picsum.photos/739",
//   },
//   {
//     id: "40",
//     title: "Card Title 10",
//     subtitle: "Card Subtitle 10",
//     content: "Card content 10",
//     imageUri: "https://picsum.photos/740",
//   },
//   {
//     id: "41",
//     title: "Card Title 1",
//     subtitle: "Card Subtitle 1",
//     content: "Card content 1",
//     imageUri: "https://picsum.photos/741",
//   },
//   {
//     id: "42",
//     title: "Card Title 2",
//     subtitle: "Card Subtitle 2",
//     content: "Card content 2",
//     imageUri: "https://picsum.photos/742",
//   },
//   {
//     id: "43",
//     title: "Card Title 3",
//     subtitle: "Card Subtitle 3",
//     content: "Card content 3",
//     imageUri: "https://picsum.photos/743",
//   },
//   {
//     id: "44",
//     title: "Card Title 4",
//     subtitle: "Card Subtitle 4",
//     content: "Card content 4",
//     imageUri: "https://picsum.photos/744",
//   },
//   {
//     id: "45",
//     title: "Card Title 5",
//     subtitle: "Card Subtitle 5",
//     content: "Card content 5",
//     imageUri: "https://picsum.photos/745",
//   },
//   {
//     id: "46",
//     title: "Card Title 6",
//     subtitle: "Card Subtitle 6",
//     content: "Card content 6",
//     imageUri: "https://picsum.photos/746",
//   },
//   {
//     id: "47",
//     title: "Card Title 7",
//     subtitle: "Card Subtitle 7",
//     content: "Card content 7",
//     imageUri: "https://picsum.photos/747",
//   },
//   {
//     id: "48",
//     title: "Card Title 8",
//     subtitle: "Card Subtitle 8",
//     content: "Card content 8",
//     imageUri: "https://picsum.photos/748",
//   },
//   {
//     id: "49",
//     title: "Card Title 9",
//     subtitle: "Card Subtitle 9",
//     content: "Card content 9",
//     imageUri: "https://picsum.photos/749",
//   },
//   {
//     id: "50",
//     title: "Card Title 10",
//     subtitle: "Card Subtitle 10",
//     content: "Card content 10",
//     imageUri: "https://picsum.photos/750",
//   },
// ];

// const Cards = () => {

// This is the card navigation

//   const navigation = useNavigation();

// This is the card button navigation

//   const goToDetails = (item) => {
//     navigation.navigate("Details", { item });
//   };

// Passed data to render this card component

//   const renderItem = ({ item }) => (
//     <Card style={{ marginBottom: 15 }}>
//       <Card.Title
//         title={item.title}
//         subtitle={item.subtitle}
//         left={LeftContent}
//       />
//       <Card.Content>
//         <Text variant="titleLarge">{item.title}</Text>
//         <Text variant="bodyMedium">{item.content}</Text>
//       </Card.Content>
//       <Card.Cover source={{ uri: item.imageUri }} />
//       <Card.Actions>
//         <Button onPress={() => goToDetails(item)}>View</Button>
//       </Card.Actions>
//     </Card>
//   );

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar style="dark" />

// Virtualized content List view
//       <VirtualizedList
//         data={data}
//         getItemCount={getItemCount}
//         getItem={getItem}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ padding: 15 }}
//       />
//     </SafeAreaView>
//   );
// };

// export default Cards;
