import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform
} from "react-native";

import * as theme from "../../theme";
import TextInputField from "../../components/TextInputField";

const Auth = props => {
  let MyComponent = SafeAreaView;
  if (Platform.OS === "android") {
    MyComponent = KeyboardAvoidingView;
  }

  const handleLogin = () => {
    props.navigation.navigate("Map");
  };

  return (
    <MyComponent style={styles.container} behavior="padding" enabled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/icbadge.png")}
              style={{ width: 70, height: 70 }}
            ></Image>
            <Text style={{ ...styles.logoTitle, ...styles.text }}>
              Parking Finder
            </Text>
          </View>
          <View style={styles.socialButtonContainer}>
            <TouchableOpacity>
              <View style={styles.socialButton}>
                <Image
                  source={require("../../assets/icon-facebook.png")}
                  style={styles.socialLogo}
                />
                <Text style={styles.text}>Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.socialButton}>
                <Image
                  source={require("../../assets/icon-google.png")}
                  style={styles.socialLogo}
                />
                <Text style={styles.text}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={(styles.text, styles.orText)}>or</Text>
          <TextInputField title="Email"></TextInputField>
          <TextInputField
            title="Password"
            isSecure={true}
            style={{ marginTop: 32, marginBottom: 8 }}
          ></TextInputField>
          <Text style={[(styles.text, styles.link), { textAlign: "right" }]}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={handleLogin}
          >
            <Text style={(styles.text, styles.loginButtonText)}>Login</Text>
          </TouchableOpacity>
          <Text style={(styles.text, styles.registerNowText)}>
            Don't have an account?{" "}
            <Text style={(styles.text, styles.link)}>Register Now</Text>
          </Text>
        </View>
      </ScrollView>
    </MyComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: theme.COLORS.white
  },
  logoContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  logoTitle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "500"
  },
  text: {
    color: "#1D2029"
  },
  socialButtonContainer: {
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "center"
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171,180,189, 0.65)",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(171,180,189, 0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 3
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8
  },
  orText: {
    color: "#ABB4BD",
    textAlign: "center",
    fontSize: 15,
    marginVertical: 10
  },
  link: {
    color: theme.COLORS.red,
    fontSize: 14,
    fontWeight: "500"
  },
  loginButtonContainer: {
    backgroundColor: theme.COLORS.red,
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255,22,84,0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20
  },
  loginButtonText: {
    color: theme.COLORS.white,
    fontWeight: "600",
    fontSize: 16
  },
  registerNowText: {
    fontSize: 14,
    color: "#ABB4BD",
    textAlign: "center",
    marginTop: 24
  }
});

export default Auth;
