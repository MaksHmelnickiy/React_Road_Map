import { ISelectOption } from '@private/components';
import { AxiosResponse } from 'axios';

import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { prepareFormData } from 'utils/form';
import { IAllPageFilters, IPageType, TObject } from 'utils/types';

import {
  normalizeLinks,
  normalizeTerminalLink,
  normalizeTerminalLinkLimits,
  normalizeTerminalLinksGroups,
  normalizeTerminalLinksLimits,
  normalizeTerminalLinksParameters,
  normalizeTerminalsLinks,
  normalizeTLGroup,
  normalizeTLGroupLimits,
} from './normalizers';
import {
  IGetTerminalLinksPayload,
  IGroupEditPayload,
  ITerminalGroup,
  ITerminalGroupLimits,
  ITerminalLink,
  ITerminalLinkLimit,
  ITerminalLinkPayload,
  ITerminalLinksGroups,
  ITerminalLinksLimits,
  ITerminalLinksParameters,
  ITerminalsLinks,
} from './types';

const terminalsLinksApi = {
  async getAllTerminalsLinks(
    filters: IAllPageFilters
  ): Promise<IPageType<ITerminalsLinks>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('terminal-links', {
      params: normalizedFilter,
    });

    return normalizePageData<ITerminalsLinks, ITerminalsLinks>(
      response.data,
      normalizeTerminalsLinks
    );
  },

  async getTerminalLink(id: string): Promise<ITerminalLink> {
    const response = await axiosInstance.get(`terminal-links/${id}`);

    return normalizeTerminalLink(response.data);
  },

  async createTerminalLink(payload: ITerminalLinkPayload): Promise<ITerminalLink> {
    const normalizedTerminalLink = prepareFormData(payload);
    const result = await axiosInstance.post(`terminal-links`, normalizedTerminalLink);

    return normalizeTerminalLink(result.data);
  },

  async getAllTerminalLinksLimits(
    filters: IAllPageFilters
  ): Promise<IPageType<ITerminalLinksLimits>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('terminal-links/limits', {
      params: normalizedFilter,
    });

    return normalizePageData<TObject, ITerminalLinksLimits>(
      response.data,
      normalizeTerminalLinksLimits
    );
  },

  async getAllTerminalLinksParameters(
    filters: IAllPageFilters
  ): Promise<IPageType<ITerminalLinksParameters>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('terminal-links/parameters', {
      params: normalizedFilter,
    });

    return normalizePageData<TObject, ITerminalLinksParameters>(
      response.data,
      normalizeTerminalLinksParameters
    );
  },

  async getAllTerminalLinksGroups(
    filters: IAllPageFilters
  ): Promise<IPageType<ITerminalLinksGroups>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('terminal-links/groups', {
      params: normalizedFilter,
    });

    return normalizePageData<ITerminalLinksGroups, ITerminalLinksGroups>(
      response.data,
      normalizeTerminalLinksGroups
    );
  },

  async getTerminalLinkLimits(
    filters: IAllPageFilters,
    id?: string
  ): Promise<IPageType<ITerminalLinkLimit>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get(`terminal-links/${id}/limits`, {
      params: normalizedFilter,
    });

    return normalizePageData<TObject, ITerminalLinkLimit>(
      response.data,
      normalizeTerminalLinkLimits
    );
  },

  async getTerminalLinksList(params: IGetTerminalLinksPayload): Promise<ISelectOption[]> {
    const response = await axiosInstance.get(`terminal-links/descriptions`, {
      params,
    });

    return normalizeLinks(response.data);
  },

  async groupEdit({ filters, settings }: IGroupEditPayload): Promise<AxiosResponse> {
    const { search } = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.patch(`terminal-links/edit`, settings, {
      params: { search },
    });

    return response;
  },

  async getTLGroup(id: string): Promise<ITerminalGroup> {
    const response = await axiosInstance.get(`terminal-links/groups/${id}`);

    return normalizeTLGroup(response.data);
  },

  async getAllTLLimits(
    filters: IAllPageFilters,
    id: string
  ): Promise<IPageType<ITerminalGroupLimits>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get(`terminal-links/groups/${id}/limits`, {
      params: normalizedFilter,
    });

    return normalizePageData<TObject, ITerminalGroupLimits>(
      response.data,
      normalizeTLGroupLimits
    );
  },
};

export default terminalsLinksApi;
