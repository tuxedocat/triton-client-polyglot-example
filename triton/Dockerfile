# See also: https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html
ARG TRITON_IMAGE_TAG=22.10-py3
FROM nvcr.io/nvidia/tritonserver:${TRITON_IMAGE_TAG}
ENV PYTHONUNBUFFERED 1
ENV PIP_NO_CACHE_DIR 1
# For pillow-SIMD
RUN apt-get update && \
  apt-get install -y libjpeg-turbo-progs libjpeg8-dev libtiff5-dev libwebp-dev zlib1g-dev && \
  apt-get clean

COPY ./ready.py /bin/ready.py
ARG HUGGINGFACE_VERSION=4.24.0
ARG PYTORCH_VERSION=1.13.0
RUN pip3 install --no-cache-dir \
  opencv-python-headless \ 
  "transformers~=${HUGGINGFACE_VERSION}" "sentencepiece~=0.1.97" "torch~=${PYTORCH_VERSION}" \
  "tritonclient[all]~=2.27.0"
RUN pip3 uninstall -y pillow && \
  CC="cc -mavx2" pip3 install -U --force-reinstall Pillow-SIMD
