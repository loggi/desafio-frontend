import { renderHook, act } from '@testing-library/react';
import useTrackingCode from './useTrackingCode';

const TRACKING_CODE = '12345'

describe('useTrackingCode', () => {
  it('deve retornar o objeto packageTracker inicial', () => {
    const { result } = renderHook(() => useTrackingCode(TRACKING_CODE));
    expect(result.current.packageTracker).toMatchObject({
      eta: 1677251584,
      packageInfo: {
        packageId: 275314784,
        trackingKey: '12345'
      },
    });
  });

  it('deve habilitar destinationInfo com um número de documento válido', () => {
    const { result } = renderHook(() => useTrackingCode(TRACKING_CODE));

    expect(result.current.packageTracker.destinationInfo.firstLine).toBe("Rua Est\u00e1*** ** *\u00e1, ****");

    act(() => {
      result.current.enableDestinationInfo('123456789');
    });

    expect(result.current.packageTracker.destinationInfo.firstLine).toBe('Rua Estácio de Sá, 1234');
  });

  it('não deve habilitar destinationInfo com um número de documento inválido', () => {
    const { result } = renderHook(() => useTrackingCode(TRACKING_CODE));

    expect(result.current.packageTracker.destinationInfo.firstLine).toBe("Rua Est\u00e1*** ** *\u00e1, ****");

    act(() => {
      result.current.enableDestinationInfo(''); 
    });

    expect(result.current.packageTracker.destinationInfo.firstLine).toBe("Rua Est\u00e1*** ** *\u00e1, ****");
  });
});
