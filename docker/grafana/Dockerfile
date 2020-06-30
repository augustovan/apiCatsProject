FROM grafana/grafana:7.0.1	

USER root

# Install curl 
RUN apk --no-cache add curl

# Install chamber
ENV CHAMBER_VERSION=2.0.0
ENV CHAMBER_SHA256SUM=bdff59df90a135ea485f9ce5bcfed2b3b1cc9129840f08ef9f0ab5309511b224
RUN curl -Ls https://github.com/segmentio/chamber/releases/download/v${CHAMBER_VERSION}/chamber-v${CHAMBER_VERSION}-linux-amd64 > chamber-linux-amd64 && \
    echo "${CHAMBER_SHA256SUM}  chamber-linux-amd64" > chamber_SHA256SUMS && \
    sha256sum -c chamber_SHA256SUMS && \
    rm chamber_SHA256SUMS && \
    chmod +x chamber-linux-amd64 && \
    mv chamber-linux-amd64 /usr/local/bin/chamber

#sets ups plugins
RUN grafana-cli plugins install grafana-piechart-panel
RUN grafana-cli plugins install btplc-alarm-box-panel
RUN grafana-cli plugins install ryantxu-annolist-panel
RUN grafana-cli plugins install jdbranham-diagram-panel
RUN grafana-cli plugins install btplc-peak-report-panel
RUN grafana-cli plugins install mtanda-histogram-panel
RUN grafana-cli plugins install grafana-polystat-panel
RUN grafana-cli plugins install vonage-status-panel
RUN grafana-cli plugins install snuids-trafficlights-panel
RUN grafana-cli plugins install alexanderzobnin-zabbix-app
RUN grafana-cli plugins install grafana-worldmap-panel
RUN grafana-cli plugins install neocat-cal-heatmap-panel
#RUN grafana-cli plugins install mtanda-heatmap-epoch-panel
RUN grafana-cli plugins install satellogic-3d-globe-panel
RUN grafana-cli plugins install yesoreyeram-boomtable-panel
RUN grafana-cli plugins install michaeldmoore-annunciator-panel
RUN grafana-cli plugins install michaeldmoore-multistat-panel
RUN grafana-cli plugins install zuburqan-parity-report-panel
RUN grafana-cli plugins install mxswat-separator-panel
RUN grafana-cli plugins install flant-statusmap-panel
RUN grafana-cli plugins install btplc-status-dot-panel
RUN grafana-cli plugins install scadavis-synoptic-panel
RUN grafana-cli plugins install kubernetes-app
RUN grafana-cli plugins install yesoreyeram-boomtable-panel

# Let chamber export secrets as env variables during startup
ENTRYPOINT ["chamber", "exec", "grafana", "--", "/run.sh"]
