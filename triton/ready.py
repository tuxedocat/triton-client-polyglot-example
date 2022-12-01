#!/usr/bin/env python3
import tritonclient.grpc as tritonclient
import sys
import logging

logging.basicConfig()

if __name__ == "__main__":
    try:
        tc = tritonclient.InferenceServerClient("localhost:8001")
        if tc.is_server_ready():
            logging.info("healthy: SERVING")
            tc.close()
            sys.exit(0)
        else:
            tc.close()
            sys.exit(1)
    except Exception as e:
        logging.error(f"unhealthy: {e}")
