// import React from "react";
// import { SafeAreaView, View, Text, Image } from "react-native";

// const Details = ({ route }) => {
//   const { item } = route.params;
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, alignItems: "center" }}>
//         <Image
//           source={{ uri: item.imageUri }}
//           width={500}
//           height={400}
//           resizeMode="contain"
//         ></Image>
//         <Text style={{ fontSize: 24, marginBottom: 10 }}>Details Page</Text>
//         <Text>This is the details page content.</Text>
//         <Text>
//           Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
//           egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
//           hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
//           habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
//           sodales taciti duis praesent id. Consequat urna vitae morbi nunc
//           congue.
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Details;

import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import ImageZoom from "react-native-image-pan-zoom"; // This is needed to ImageZoom
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view"; // This is needed to ReactNativeZoomable

const Details = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>

{/* This package for ZoomableView */}

      <ReactNativeZoomableView
        maxZoom={3}
        disablePanOnInitialZoom={false}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        // bindToBorders={true}
        onZoomAfter={this.logOutZoomState}
        style={{
          padding: 10,
          backgroundColor: "white",
        }}
        contentWidth={300}
        contentHeight={150}
      >
        <View style={{ flex: 1, alignItems: "center" }}>

          {/* This is for Image Zoom View */}

          {/* <ImageZoom
            cropWidth={500}
            cropHeight={400}
            imageWidth={500}
            imageHeight={400}
          > */}
          <Image
            source={{ uri: item.imageUri }}
            style={{ width: 500, height: 400 }}
            resizeMode="contain"
          />
          {/* </ImageZoom> */}
          <Text style={{ fontSize: 24, marginBottom: 10 }}>Details Page</Text>
          <Text>This is the details page content.</Text>
          <Text>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </Text>
        </View>
      </ReactNativeZoomableView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
