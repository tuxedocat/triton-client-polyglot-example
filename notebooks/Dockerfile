# See also: https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html
FROM nvcr.io/nvidia/pytorch:22.10-py3

ARG HUGGINGFACE_VERSION=4.24.0
RUN conda run pip3 install --no-cache-dir "transformers[ja,onnx]~=${HUGGINGFACE_VERSION}" tqdm 
COPY jupyter_notebook_config.py /root/.jupyter/

EXPOSE 8888
ENV JUPYTER_PORT 8888
CMD [ "jupyter", "lab", "--allow-root", "--ip=0.0.0.0", "--config=/root/.jupyter/jupyter_notebook_config.py", "--notebook-dir=/workspace" ]
